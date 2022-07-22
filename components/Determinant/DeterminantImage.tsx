import {ReactElement, useContext} from "react";
import DeterminantCell from "./DeterminantCell";
import {DeterminantData} from "../../pages";
import {MaskContext} from "../../context/MaskContext";

export interface DeterminantImageParams {
  determinantData: DeterminantData;
}

export default function DeterminantImage(params: DeterminantImageParams) {
  const maskContext = useContext(MaskContext);
  function makeTable() {
    let cells: ReactElement[] = [];

    for (let i = 0; i < 3; i++) {
      let row: ReactElement[] = [];
      for (let j = 0; j < 3; j++) {
        const key = i * 3 + j;
        row.push(
            <td>
              <DeterminantCell className={"aspect-square h-fit"} key={key}>
                <span className={`p-2 text-center ${
                  params.determinantData.Key[key] === maskContext[key] ?
                      "text-lime-700" :
                      "text-white"
                }`}>
                  {params.determinantData.Key[key]}
                </span>
              </DeterminantCell>
            </td>
        );
      }
      cells.push(
          <tr>
            {row}
          </tr>
      );
    }
    return cells;
  }

  return <>
    <div
        className="relative w-fit h-fit border-l-2 border-r-2 border-white py-1 px-2">
      <table className="table-auto">
        <tbody>{makeTable()}</tbody>
      </table>
    </div>
  </>;
}