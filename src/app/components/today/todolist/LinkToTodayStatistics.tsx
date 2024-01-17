import React from "react";
import { CgArrowRightO } from "react-icons/cg";

export default function LinkToTodayStatistics() {
  return (
    <div className="flex items-center gap-2">
      <div>일간통계</div>
      <CgArrowRightO className="text-xl"/>
    </div>
  );
}
