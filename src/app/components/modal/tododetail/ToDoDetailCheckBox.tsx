import React from "react";
import { BiRectangle } from "react-icons/bi";
import { CgArrowRightR, CgCloseR, CgCheckR, CgAddR } from "react-icons/cg";
type Props = {
  status: string;
};
const iconMapping: Record<string, React.ReactNode> = {
  yet: (
    <BiRectangle className="w-8 h-8 text-black hover:scale-105 hover:cursor-pointer hover:text-opacity-80" />
  ),
  delay: (
    <CgArrowRightR className="w-8 h-8 text-[#7D87FF] hover:scale-105 hover:cursor-pointer hover:text-opacity-80" />
  ),
  cancel: (
    <CgCloseR className="w-8 h-8 text-[#FF5966] hover:scale-105 hover:cursor-pointer hover:text-opacity-80" />
  ),
  done: (
    <CgCheckR className="w-8 h-8 text-[#48EE8F] hover:scale-105 hover:cursor-pointer hover:text-opacity-80" />
  ),
};

export default function ToDoDetailCheckBox({ status }: Props) {
  // TODO: 카테고리 바꾸는 기능 만들기 => 위에서 부터 내려와야 할듯
  return (
    <div className="flex justify-evenly items-center bg-white rounded-xl px-2 p-1">
      <div>
        <p className="text-xs animate-pulse">Now</p>
        {iconMapping[status]}
      </div>
      <div className="flex gap-2">
        {iconMapping["yet"]}
        {iconMapping["delay"]}
        {iconMapping["cancel"]}
        {iconMapping["done"]}
      </div>
    </div>
  );
}
