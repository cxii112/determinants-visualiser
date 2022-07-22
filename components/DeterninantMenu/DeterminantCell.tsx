import {ReactNode} from "react";

export default function DeterminantCell(params: DeterminantCellParams) {
  return <>
    <span className={`w-2 ${params.className}`}>
      {params.children}
    </span>
  </>
}
export interface DeterminantCellParams {
  className?: string,
  children?: ReactNode
}