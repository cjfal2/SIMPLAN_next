import { getThisWeekDates, getTodayDate } from "@/app/service/getTodayDate";
import React from "react";
import WeekItem from "./WeekItem";

export default function WeekTable() {
  const thisWeekInfo = getThisWeekDates();
  const [year, month, today, dow] = getTodayDate();
  return (
    <div className="w-full h-full flex flex-col">
      <div>
        오늘: {year}년 {month}월 {today}일
      </div>
    <div className="bg-white flex flex-col gap-2 h-full">
      <div>
        {thisWeekInfo.map((day, idx) => (
          <div
          key={day[1]}
          className={`flex ${today === day[0] && "bg-red-300"}`}
          >
            <div
              className={`flex flex-col items-center justify-center border-r-black border-r-4 w-16 ${
                today === day[0] && "border-none"
              }`}
              >
              <div className="font-bold">{[day[1]]}</div>
              <div>{day[0]}</div>
            </div>
            <WeekItem year={year} month={month} someday={day[0]} idx={idx} />
          </div>
        ))}
      </div>
    </div>
        </div>
  );
}
