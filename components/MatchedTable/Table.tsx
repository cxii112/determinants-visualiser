import {DeterminantData} from "../../pages";
import DeterminantImage from "../Determinant/DeterminantImage";
import {useEffect, useState} from "react";
import SliceSwitcher from "./SliceSwither";

export interface MatchedTableParams {
  list: DeterminantData[];
}

export default function Table(params: MatchedTableParams) {
  const shift = 100;
  const maxStart = params.list.length - (params.list.length % shift);
  console.debug(maxStart);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(start + shift);

  function countPositives() {
    let positives = 0;
    params.list.map(value => {
      if (value.Det > 0) positives++;
    });
    return positives;
  }

  function countNegatives() {
    let negatives = 0;
    params.list.map(value => {
      if (value.Det < 0) negatives++;
    });
    return negatives;
  }

  function countDraws() {
    let draws = 0;
    params.list.map(value => {
      if (value.Det === 0) draws++;
    });
    return draws;
  }

  function updateStart(value: number) {
    if (value < 0 || value > maxStart || isNaN(value)) return;
    setStart(value);
  }

  useEffect(() => {
    setEnd(
        params.list.length > start + shift ?
            start + shift :
            params.list.length
    );
  }, [start]);


  return <>
    <div>
      <span className={"text-white p-2 rounded-md bg-purple-700 w-fit"}>
      Совпадений: {params.list.length}
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
    <div>
      <span className={"text-white"}>Показывается: </span>
      <SliceSwitcher start={start} end={end} callback={updateStart}/>
    </div>
    <table className={"table-auto w-full"}>
      <thead className={"text-white bg-zinc-800"}>
      <tr>
        <th>#</th>
        <th>Опеределитель</th>
        <th>Значение</th>
      </tr>
      </thead>
      <tbody className={"divide-y divide-zinc-700"}>
      {
        params.list.slice(start, end)
            .map((determinant, index) => {
              return <>
                <tr key={index + start}
                    className={"hover:bg-zinc-800 divide-x divide-zinc-700"}
                >
                  <td><span className={"text-white"}>{start + index + 1}</span></td>
                  <td>
                    <span className={"w-full h-full"}>
                      <DeterminantImage determinantData={determinant}/>
                    </span>
                  </td>
                  <td className={` ${
                    determinant.Det > 0 ?
                        "text-red-600" : 
                        determinant.Det < 0 ?
                            "text-cyan-700" : 
                            "text-zinc-100"
                  }`}>
                    {determinant.Det}
                  </td>
                </tr>
              </>;
            })
      }
      </tbody>
    </table>
  </>;
}