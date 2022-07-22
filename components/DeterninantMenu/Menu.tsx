import DeterminantCell from "../Determinant/DeterminantCell";
import ListOptionPicker, {options} from "../ListOptionPicker";
import {UpdateMaskContext} from "../../context/UpdateMaskContext";
import {ReactElement, useContext} from "react";

export default function Menu() {
  const updateMaskContext = useContext(UpdateMaskContext);

  function makeTable() {
    let cells: ReactElement[] = [];

    for (let i = 0; i < 3; i++) {
      let row: ReactElement[] = [];
      for (let j = 0; j < 3; j++) {
        const key = i * 3 + j;
        row.push(
            <td>
              <DeterminantCell className={"aspect-square h-fit"} key={key}>
                <ListOptionPicker index={key}
                                  options={options}
                                  callback={updateMaskContext}
                />
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

  return <div
      className="relative w-fit h-fit border-l-2 border-r-2 border-white py-1 px-2">
    <table className="table-auto">
      <tbody>{makeTable()}</tbody>
    </table>
  </div>;
}