import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";

const options = [
    {
        value: undefined,
        symbol: "*"
    },
    {
        value: 1,
        symbol: "1"
    },
    {
        value: 2,
        symbol: "2"
    },
    {
        value: 3,
        symbol: "3"
    },
    {
        value: 4,
        symbol: "4"
    },
    {
        value: 5,
        symbol: "5"
    },
    {
        value: 6,
        symbol: "6"
    },
    {
        value: 7,
        symbol: "7"
    },
    {
        value: 8,
        symbol: "8"
    },
    {
        value: 9,
        symbol: "9"
    },
];

export default function ListOptionPicker() {
    const [selected, setSelected] = useState(options[0]);

    const undefinedTextColor = "text-gray-500";
    const definedTextColor = "text-white";

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
                <Listbox.Button
                    className="relative w-fit cursor-default rounded-lg bg-zinc-800 p-2 px-4 text-center focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className={`block truncate ${
                        selected.value === undefined ? undefinedTextColor : definedTextColor
                    }`}>
                        {selected.symbol}
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options
                        className="overflow-auto z-10 absolute mt-1 w-fit rounded-md bg-zinc-800 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {options.map((option, index) => (
                            <Listbox.Option
                                key={index}
                                className={({active, selected}) =>
                                    `relative cursor-default select-none py-1 px-3 ${
                                        active ? "bg-purple-600 text-white" : "text-gray-900"
                                    } ${
                                        selected ? "bg-purple-800 text-white" : ""
                                    }`
                                }
                                value={option}
                            >
                                {({active, selected}) => (
                                    <>
                      <span
                          className={`block ${
                              selected ? "text-black" : ""
                          } ${
                              active ? "" : "text-gray-500"
                          }`}
                      >
                        {option.symbol}
                      </span></>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
