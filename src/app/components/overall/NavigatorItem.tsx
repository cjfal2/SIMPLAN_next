import { navigatorDataType } from "@/app/model/types";
import Link from "next/link";
import React from "react";

// 프롭스에대한 데이터
type Props = {
  info: navigatorDataType;
  clickedButton: string;
  onClick: (screenName: string) => void;
};

export default function NavigatorItem({ info, clickedButton, onClick }: Props) {
  // TODO: props에 대한 데이터를 활용하여 전역 변수로 관리하고 main창이 바뀌는 기능을 추가해야함
  return (
    <div
      className={`
      h-full w-1/4 flex flex-col justify-center items-center
      ${
        clickedButton === info.eng &&
        "bg-[#FAC69F] text-[#100701] shadow-innerDown"
      }
      hover:bg-[#FAAF9F]
      hover:text-[#000000]
      active:shadow-innerDown
      active:scale-95
      `}
      onClick={() => onClick(info.eng)}
    >
      <div className="text-sm">{info.eng}</div>
      <div className="font-bold">{info.kor}</div>
    </div>
  );
}
