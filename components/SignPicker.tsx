import {useEffect, useState} from "react";
import {RadioGroup} from "@headlessui/react";

export interface SignOption {
  value: undefined | number;
  label: string;
}

export const signsOptions: SignOption[] = [
  {
    value: undefined,
    label: "Все"
  } ,
  {
    value: 1,
    label: "Только положительные"
  },
  {
    value: -1,
    label: "Только отрицательные"
  },
  {
    value: 0,
    label: "Только ничьи"
  }
];

export interface SignPickerParams {
  callback: (value: SignOption) => void
}


export default function SignPicker(params: SignPickerParams) {
  const [selected, setSelected] = useState(signsOptions[0]);

  useEffect(() => {
    params.callback(selected);
  }, [selected]);


  return (
      <div className="w-full">
        <div className="mx-auto w-fit">
          <RadioGroup value={selected} onChange={setSelected}>
            <div className="space-y-1">
              {signsOptions.map((option, index) => (
                  <RadioGroup.Option
                      key={index}
                      value={option}
                      className={({active, checked}) =>
                          `hover:bg-purple-500 bg-zinc-800${
                              active
                                  ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-300"
                                  : ""
                          }
                  ${
                              checked ? "bg-purple-700 text-white" : ""
                          }
                    relative flex cursor-pointer rounded-lg px-3 py-2 focus:outline-none`
                      }
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                              as="p"
                              className={`font-medium  text-white`}
                          >
                            {option.label}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
  );
}

// @ts-ignore
function CheckIcon(props) {
  return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2"/>
        <path
            d="M7 13l3 3 7-7"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  );
}
