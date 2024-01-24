import { NavigatorDataType } from "@/app/model/types";
import Link from "next/link";
import React from "react";

// 프롭스에대한 데이터
type Props = {
  info: NavigatorDataType;
  pathName: string;
};

export default function NavigatorItem({ info, pathName }: Props) {
  return (
    <Link
      href={`/${info.eng}`}
      className={`
      h-full w-1/4 flex flex-col justify-center items-center
      ${
        pathName === `/${info.eng}` &&
        "bg-[#FAC69F] text-[#100701] shadow-innerDown"
      }
      hover:bg-[#FAAF9F]
      hover:text-[#000000]
      active:shadow-innerDown
      active:scale-95
      `}
    >
      <div className="text-sm">{info.eng}</div>
      <div className="font-bold">{info.kor}</div>
    </Link>
  );
}
