"use client";

import { getTodayDate } from "@/app/apis/getTodayDate";
import React, { useEffect, useState } from "react";
import MonthPageCalendar from "./MonthPageCalendar";
import { getSomedayToDo } from "@/app/apis/getToDo";
import MonthToDoZone from "./MonthToDoZone";

const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];

export default function MonthPageItem() {
  let [yearToday, monthToday, dayToday, dayOfWeekToday]: number[] =
    getTodayDate();
  const [year, setYear] = useState<number>(yearToday);
  const [month, setMonth] = useState<number>(monthToday);
  const [day, setDay] = useState<number>(dayToday);
  const [dayOfWeek, setDayOfWeek] = useState(daysOfWeek[dayOfWeekToday]);

  const setSomeday = (y: number, m: number, d: number, w: string) => {
    setYear(y);
    setMonth(m);
    setDay(d);
    setDayOfWeek(w);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center py-4 px-2 w-10/12">
        <MonthPageCalendar
          year={year}
          month={month}
          day={day}
          dayOfWeek={dayOfWeek}
          setSomeday={setSomeday}
        />
      </div>
      <MonthToDoZone
        year={year}
        month={month}
        someday={day}
        dayOfWeek={dayOfWeek}
      />
    </div>
  );
}
