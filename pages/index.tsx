import type {NextPage} from "next";
import data from "../public/GamesData.json";
import {useEffect, useState} from "react";
import DeterminantMenu from "../components/DeterninantMenu/DeterminantMenu";
import {UpdateMaskContext} from "../context/UpdateMaskContext";

const Home: NextPage = () => {
    const determinantsData = (data as {Key:string, Det:number}[]);
    const [mask, setMask] = useState(".........");
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
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-zinc-900">
                <UpdateMaskContext.Provider value={updateMask}>
                    <DeterminantMenu/>
                </UpdateMaskContext.Provider>
            </div>
        </div>
    );
};

export default Home;
