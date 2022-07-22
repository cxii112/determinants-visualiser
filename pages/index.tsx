import type {NextPage} from "next";
import data from "../public/GamesData.json";
import {useEffect, useState} from "react";
import Menu from "../components/DeterninantMenu/Menu";
import {UpdateMaskContext} from "../context/UpdateMaskContext";
import Table from "../components/MatchedTable/Table";
import { MaskContext } from "../context/MaskContext";

export interface DeterminantData {
    Key: string;
    Det: number;
}

const Home: NextPage = () => {
    const determinantsData = (data as DeterminantData[]);
    const [mask, setMask] = useState("123456789");
    const [filtered, setFiltered] = useState(determinantsData);

    function updateMask(key: number, value: number | undefined) {
        setMask(prev => {
            const replacement = value !== undefined ? value.toString() : ".";
            return prev.substring(0, key) + replacement + prev.substring(key + 1);
        });
    }

    function filterDataByMask() {
        let newFiltered: { Key: string; Det: number; }[] = [];
        determinantsData.map((value) => {
            if (value.Key.match(new RegExp(mask))) newFiltered.push(value);
        });
        setFiltered(newFiltered);
    }

    useEffect(() => {
        console.debug(mask);
        filterDataByMask();
    }, [mask]);

    return (
        <div className={"bg-zinc-900 min-h-screen pt-10"}>
            <div className="p-2 w-full h-fit px-20 space-y-6">
                <UpdateMaskContext.Provider value={updateMask}>
                    <Menu/>
                </UpdateMaskContext.Provider>
                <MaskContext.Provider value={mask}>
                    <Table list={filtered} />
                </MaskContext.Provider>
            </div>
        </div>
    );
};

export default Home;
