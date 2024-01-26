import React from "react";
import { BiRectangle } from "react-icons/bi";
import { CgArrowRightR, CgCloseR, CgCheckR, CgAddR } from "react-icons/cg";
type Props = {
  status: string;
  changeStatus: (str: string) => void;
};

export default function ToDoDetailCheckBox({ status, changeStatus }: Props) {
  const iconMapping: Record<string, React.ReactNode> = {
    DEFAULT: (
      <BiRectangle className="w-8 h-8 text-black hover:scale-105 hover:cursor-pointer hover:text-opacity-80" />
    ),
    DELAYED: (
      <CgArrowRightR className="w-8 h-8 text-[#7D87FF] hover:scale-105 hover:cursor-pointer hover:text-opacity-80" />
    ),
    CANCELED: (
      <CgCloseR className="w-8 h-8 text-[#FF5966] hover:scale-105 hover:cursor-pointer hover:text-opacity-80" />
    ),
    DONE: (
      <CgCheckR className="w-8 h-8 text-[#48EE8F] hover:scale-105 hover:cursor-pointer hover:text-opacity-80" />
    ),
  };
  // TODO: 카테고리 바꾸는 기능 만들기 => 위에서 부터 내려와야 할듯
  return (
    <div className="flex justify-evenly items-center bg-white rounded-xl px-2 p-1">
      <div>
        <p className="text-xs animate-pulse">Now</p>
        {iconMapping[status]}
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xs">진행중</div>
          <BiRectangle
            onClick={() => changeStatus("DEFAULT")}
            className="w-8 h-8 text-black hover:scale-105 hover:cursor-pointer hover:text-opacity-80"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="text-xs">미룸</div>
          <CgArrowRightR
            onClick={() => changeStatus("DELAYED")}
            className="w-8 h-8 text-[#7D87FF] hover:scale-105 hover:cursor-pointer hover:text-opacity-80"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xs">취소</div>
          <CgCloseR
            onClick={() => changeStatus("CANCELED")}
            className="w-8 h-8 text-[#FF5966] hover:scale-105 hover:cursor-pointer hover:text-opacity-80"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xs">완료</div>
          <CgCheckR
            onClick={() => changeStatus("DONE")}
            className="w-8 h-8 text-[#48EE8F] hover:scale-105 hover:cursor-pointer hover:text-opacity-80"
          />
        </div>
      </div>
    </div>
  );
}
