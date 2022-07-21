import DeterminantCell from "./DeterminantCell";
import ListOptionPicker from "../ListOptionPicker";

export default function DeterminantMenu() {
  let cells = [];
  for (let i =0; i<9;i++)
  {
    cells.push(<DeterminantCell className={"w-fit h-fit"} key={i}>
      <ListOptionPicker/>
    </DeterminantCell>)
  }
  return <>
    <div className="aspect-square border-l-2 border-r-2 border-white min-w-fit flex justify-center align-middle py-1">
      <div className="grid grid-cols-3 gap-x-4 gap-y-2 px-2">
        {cells}
      </div>
    </div>
  </>;
}