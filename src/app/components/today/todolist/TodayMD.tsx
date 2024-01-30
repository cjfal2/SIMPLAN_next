import React from "react";
const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];

export default function TodayMD() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  const date = today.getDay();
  return (
    <div className="text-2xl font-semibold">{`${month + 1}월 ${day}일 ${daysOfWeek[date]}요일`}</div>
  );
}
