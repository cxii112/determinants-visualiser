import {createContext} from "react";
import {SignOption} from "../components/SignPicker";

export const UpdateFilterOptionsContext = createContext(
    {
      maskCallback: (key: number, value: number | undefined) => {},
      signCallback: (value: SignOption) => {}
    }
);