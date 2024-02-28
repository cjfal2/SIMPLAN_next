"use client";

import React, { useState } from "react";
import StatNav from "./StatNav";
import StatWeek from "./StatWeek";
import StatMonth from "./StatMonth";
import { getTodayDate } from "@/app/apis/getTodayDate";

export default function StatHome() {
  const [where, setWhere] = useState("week");
  const clickNav = (click: string) => {
    setWhere(click);
  };
  let [year, month, day, dayOfWeek]: number[] = getTodayDate();
  return (
    <>
      <StatNav clickButton={clickNav} where={where} />

      <div className="font-bold text-lg">
        {year}년 {month}월 {day}일
      </div>

      {where === "week" ? <StatWeek /> : <StatMonth />}
    </>
  );
}
