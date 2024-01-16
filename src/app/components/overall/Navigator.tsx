"use client";

import React, { useState } from "react";
import NavigatorItem from "./NavigatorItem";
import { navigatorDataType } from "@/app/model/types";

// 네비게이션 아이템의 정보
const navigatorData: navigatorDataType[] = [
  { eng: "Today", kor: "오늘" },
  { eng: "Week", kor: "주간" },
  { eng: "Month", kor: "월간" },
  { eng: "Statistics", kor: "통계" },
];

export default function Navigator() {
  // 클릭된 버튼 구분과 라우팅을 위한 변수 선언
  const [clickedButton, setClickedButton] = useState(navigatorData[0].eng);
  return (
    // 모바일 하단 네비게이션 규칙에 따라 48px로 고정
    <div className="h-[48px] flex justify-between items-center bg-[#FDE7D7] text-[#ABABAB]">
      {/* 네비게이션 아이템을 컴포넌트화 한 후 반복문 처리 */}
      {navigatorData.map((data) => (
        <NavigatorItem
          key={data.eng}
          info={data}
          clickedButton={clickedButton}
          onClick={setClickedButton}
        />
      ))}
    </div>
  );
}
