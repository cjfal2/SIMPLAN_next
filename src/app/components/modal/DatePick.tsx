"use client";

import { getTodayDate } from "@/app/service/getTodayDate";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import TimeDropHour from "./TimeDropStart";
import TimeDropMinute from "./TimeDropEnd";
import MonthCalender from "./MonthCalender";

const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];

export default function DatePick() {
  let [yearToday, monthToday, dayToday, dayOfWeekToday]: number[] =
    getTodayDate();
  const [year, setYear] = useState<number>(yearToday);
  const [month, setMonth] = useState<number>(monthToday);
  const [day, setDay] = useState<number>(dayToday);
  const [dayOfWeek, setDayOfWeek] = useState(daysOfWeek[dayOfWeekToday]);
  const [planStartTimeHour, setPlanStartTimeHour] = useState(0);
  const [planStartTimeMinute, setPlanStartTimeMinute] = useState(0);
  const [planEndTimeHour, setPlanEndTimeHour] = useState(0);
  const [planEndTimeMinute, setPlanEndTimeMinute] = useState(0);
  const [isClickedStart, setIsClickedStart] = useState(false);
  const [isClickedEnd, setIsClickedEnd] = useState(false);
  const [isClickedCalendar, setIsClickedCalendar] = useState(false);

  const clickStartTime = () => {
    setIsClickedStart(!isClickedStart);
  };

  const clickStartHour = (num: number) => {
    setPlanStartTimeHour(num);
  };

  const clickStartMinute = (num: number) => {
    setPlanStartTimeMinute(num);
  };

  const clickEndTime = () => {
    setIsClickedEnd(!isClickedEnd);
  };

  const clickEndHour = (num: number) => {
    setPlanEndTimeHour(num);
  };

  const clickEndMinute = (num: number) => {
    setPlanEndTimeMinute(num);
  };

  const clickCalendar = () => {
    setIsClickedCalendar(!isClickedCalendar);
  };

  const changeYear = (num: number) => {
    setYear(num);
  };
  const changeMonth = (num: number) => {
    setMonth(num);
  };
  const changeDay = (num: number) => {
    setDay(num);
  };

  const changeDayOfWeek = (str: string) => {
    setDayOfWeek(str);
  };

  return (
    <div className="flex flex-col items-start w-full gap-1">
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
      <div className="flex items-center justify-between w-full">
        <p>시작</p>
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
