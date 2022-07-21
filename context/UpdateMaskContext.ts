import {createContext} from "react";

export const UpdateMaskContext = createContext(
    (key: number, value: number | undefined) => {}
);