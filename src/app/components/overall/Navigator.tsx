"use client";

import React from "react";
import NavigatorItem from "./NavigatorItem";
import { NavigatorDataType } from "@/app/model/types";
import { usePathname } from "next/navigation";

// 네비게이션 아이템의 정보
const navigatorData: NavigatorDataType[] = [
  { eng: "Today", kor: "오늘" },
  { eng: "Week", kor: "주간" },
  { eng: "Month", kor: "월간" },
  { eng: "Statistics", kor: "통계" },
];

export default function Navigator() {
  // Nextjs의 기본 기능인 usePathname을 활용해서 usestatus를 없애고 파일 경로 이름을 사용하는 식으로 변경
  let pathName: string = usePathname(); // use client 사용해야함
  return (
    // 모바일 하단 네비게이션 규칙에 따라 48px로 고정
    <div className="h-nav flex justify-between items-center bg-[#FDE7D7] text-[#ABABAB]">
      {/* 네비게이션 아이템을 컴포넌트화 한 후 반복문 처리 */}
      {navigatorData.map((data) => (
        <NavigatorItem key={data.eng} info={data} pathName={pathName} />
      ))}
    </div>
  );
}
