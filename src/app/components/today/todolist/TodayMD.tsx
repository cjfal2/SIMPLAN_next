"use client"

import { getTodayDate } from "@/app/apis/getTodayDate";
import React from "react";
const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];

export default function TodayMD() {
  let [yearToday, monthToday, dayToday, dayOfWeekToday]: number[] = getTodayDate();
  return (
    <div className="text-2xl font-semibold">{`${monthToday}월 ${dayToday}일 ${daysOfWeek[dayOfWeekToday]}요일`}</div>
  );
}
