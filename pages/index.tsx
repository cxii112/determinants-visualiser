import type {NextPage} from "next";
import data from "../public/GamesData.json";
import {useEffect, useState} from "react";
import {UpdateFilterOptionsContext} from "../context/UpdateFilterOptionsContext";
import Table from "../components/MatchedTable/Table";
import {MaskContext} from "../context/MaskContext";
import OptionsPicker from "../components/OptionsPicker";
import {SignOption, signsOptions} from "../components/SignPicker";

export interface DeterminantData {
  Key: string;
  Det: number;
}

const Home: NextPage = () => {
  const determinantsData = (data as DeterminantData[]);
  const [mask, setMask] = useState("123456789");
  const [filtered, setFiltered] = useState(determinantsData);
  const [signOption, setSignOption] = useState(signsOptions[0]);

  function countPositives() {
    let positives = 0;
    filtered.map(value => {
      if (value.Det > 0) positives++;
    });
    return positives;
  }

  function countNegatives() {
    let negatives = 0;
    filtered.map(value => {
      if (value.Det < 0) negatives++;
    });
    return negatives;
  }

  function countDraws() {
    let draws = 0;
    filtered.map(value => {
      if (value.Det === 0) draws++;
    });
    return draws;
  }

  function updateMask(key: number, value: number | undefined) {
    setMask(prev => {
      const replacement = value !== undefined ? value.toString() : ".";
      return prev.substring(0, key) + replacement + prev.substring(key + 1);
    });
  }

  function updateSignOption(value: SignOption) {
    setSignOption(value);
  }

  function filterData() {
    let newFiltered = determinantsData
        .filter(value => {
          if (value.Key.match(new RegExp(mask))) return true;
        })
        .filter(value => {
          if (signOption.value === undefined) return true;
          return Math.sign(value.Det) === signOption.value;
        });
    setFiltered(newFiltered);
  }

  useEffect(() => {
    console.debug(mask);
    filterData();
  }, [mask, signOption]);

  return (
      <div className={"bg-zinc-900 min-h-screen pt-10"}>
        <div className="p-2 w-full h-fit px-20 space-y-6">
          <UpdateFilterOptionsContext.Provider value={
            {
              maskCallback: updateMask,
              signCallback: updateSignOption
            }
          }>
            <OptionsPicker/>
          </UpdateFilterOptionsContext.Provider>
          <div>
      <span className={"text-white p-2 rounded-md bg-purple-700 w-fit"}>
      Совпадений: {filtered.length}
      </span>
            <span className={"text-white p-2 w-fit"}>
        Положительные: {countPositives()}
      </span>
            <span className={"text-white p-2 w-fit"}>
        Отрицательные: {countNegatives()}
      </span>
            <span className={"text-white p-2 w-fit"}>
        Ничьи: {countDraws()}
      </span>
          </div>
          <MaskContext.Provider value={mask}>
            <Table list={filtered}/>
          </MaskContext.Provider>
        </div>
      </div>
  );
};

export default Home;
