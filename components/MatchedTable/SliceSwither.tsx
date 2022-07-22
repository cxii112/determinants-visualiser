import {useState} from "react";

export interface SliceSwitcherParams {
  start: number,
  shift?: number,
  end: number,
  callback: (value: number) => void
}

export default function SliceSwitcher(params: SliceSwitcherParams) {
  const shift = (params.shift === undefined ? 100 : params.shift!);

  function onClickLeft() {
    params.callback(params.start - shift);
  }

  function onClickRight() {
    params.callback(params.start + shift);
  }

  return <>
  <span className={"space-x-2"}>
    <span className={"rounded-xl border border-purple-700 px-3 py-1 text-white text-center hover:bg-purple-700"}
          onClick={onClickLeft}>{"<"}</span>
    <span className={"text-white"}>{params.start + 1}-{params.end}</span>
    <span className={"rounded-xl border border-purple-700 px-3 py-1 text-white text-center hover:bg-purple-700"}
          onClick={onClickRight}>{">"}</span>
  </span>
  </>;
}