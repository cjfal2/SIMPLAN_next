"use client";

import { getTodayDate } from "@/app/service/getTodayDate";
import React, { useState } from "react";
import MonthPageCalendar from "./MonthPageCalendar";

const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];

export default function MonthPageItem() {
  let [yearToday, monthToday, dayToday, dayOfWeekToday]: number[] =
    getTodayDate();
  const [year, setYear] = useState<number>(yearToday);
  const [month, setMonth] = useState<number>(monthToday);
  const [day, setDay] = useState<number>(dayToday);
  const [dayOfWeek, setDayOfWeek] = useState(daysOfWeek[dayOfWeekToday]);

  // const setSomedayTodo = (y,m,d) => {

  // }


  return (
    <div className="flex flex-col justify-center items-center py-4 px-2 w-10/12">
      <MonthPageCalendar
        year={year}
        month={month}
        day={day}
        dayOfWeek={dayOfWeek}
      />
      <div>{year}년 {month}월 {day}일 {dayOfWeek}요일</div>
    </div>
  );
}
