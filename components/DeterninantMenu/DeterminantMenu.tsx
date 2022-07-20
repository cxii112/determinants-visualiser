import DeterminantCell from "./DeterminantCell";

export default function DeterminantMenu() {
  return <>
    <div className="aspect-square border-l-2 border-r-2 border-black min-w-fit">
      <table className="grid grid-cols-3 gap-x-6 gap-y-2 px-2">
        <DeterminantCell>1</DeterminantCell>
        <DeterminantCell>2</DeterminantCell>
        <DeterminantCell>3</DeterminantCell>
        <DeterminantCell>1</DeterminantCell>
        <DeterminantCell>2</DeterminantCell>
        <DeterminantCell>3</DeterminantCell>
        <DeterminantCell>1</DeterminantCell>
        <DeterminantCell>2</DeterminantCell>
        <DeterminantCell>3</DeterminantCell>
      </table>
    </div>
  </>;
}