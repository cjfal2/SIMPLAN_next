"use client";

import React, { useState } from "react";
import TimeDropHour from "./TimeDropStart";
import TimeDropMinute from "./TimeDropEnd";
import MonthCalender from "./MonthCalender";

const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];
type Props = {
  year: number;
  month: number;
  day: number;
  planStartTimeHour: number;
  planStartTimeMinute: number;
  planEndTimeHour: number;
  planEndTimeMinute: number;
  dayOfWeekToday: number;
  clickStartHour: (num: number) => void;
  clickStartMinute: (num: number) => void;
  clickEndHour: (num: number) => void;
  clickEndMinute: (num: number) => void;
  changeYear: (num: number) => void;
  changeMonth: (num: number) => void;
  changeDay: (num: number) => void;
  flag: string;
};

export default function DatePick({
  year,
  month,
  day,
  planStartTimeHour,
  planStartTimeMinute,
  planEndTimeHour,
  planEndTimeMinute,
  dayOfWeekToday,
  clickStartHour,
  clickStartMinute,
  clickEndHour,
  clickEndMinute,
  changeYear,
  changeMonth,
  changeDay,
  flag,
}: Props) {
  const [dayOfWeek, setDayOfWeek] = useState(daysOfWeek[dayOfWeekToday]);

  const [isClickedStart, setIsClickedStart] = useState(false);
  const [isClickedEnd, setIsClickedEnd] = useState(false);
  const [isClickedCalendar, setIsClickedCalendar] = useState(false);

  const clickStartTime = () => {
    setIsClickedStart(!isClickedStart);
  };

  const clickEndTime = () => {
    setIsClickedEnd(!isClickedEnd);
  };

  const clickCalendar = () => {
    setIsClickedCalendar(!isClickedCalendar);
  };

  const changeDayOfWeek = (str: string) => {
    setDayOfWeek(str);
  };

  return (
    <div className="flex flex-col items-start w-full gap-1">
      {flag === "계획" ? (
        <MonthCalender
          year={year}
          month={month}
          day={day}
          dayOfWeek={dayOfWeek}
          clickCalendar={clickCalendar}
          changeYear={changeYear}
          isClickedCalendar={isClickedCalendar}
          changeMonth={changeMonth}
          changeDay={changeDay}
          changeDayOfWeek={changeDayOfWeek}
        />
      ) : (
        <></>
      )}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">

        <p>{flag}</p>
        <p>시작</p>
        </div>
        <TimeDropHour
          isClickedStart={isClickedStart}
          clickStartTime={clickStartTime}
          clickStartHour={clickStartHour}
          clickStartMinute={clickStartMinute}
          planStartTimeHour={planStartTimeHour}
          planStartTimeMinute={planStartTimeMinute}
        />
        <p className="text-2xl">~</p>
        <p>종료</p>
        <TimeDropMinute
          isClickedEnd={isClickedEnd}
          clickEndTime={clickEndTime}
          clickEndHour={clickEndHour}
          clickEndMinute={clickEndMinute}
          planEndTimeHour={planEndTimeHour}
          planEndTimeMinute={planEndTimeMinute}
        />
      </div>
    </div>
  );
}
