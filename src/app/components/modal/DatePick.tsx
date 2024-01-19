"use client";

import { getTodayDate } from "@/app/service/getTodayDate";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import TimeDropHour from "./TimeDropStart";
import TimeDropMinute from "./TimeDropEnd";

const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];

export default function DatePick() {
  let [yearToday, monthToday, dayToday, dayOfWeekToday]: number[] =
    getTodayDate();
  const [year, setYear] = useState(yearToday);
  const [month, setMonth] = useState(monthToday);
  const [day, setDay] = useState(dayToday);
  const [dayOfWeek, setDayOfWeek] = useState(dayOfWeekToday);
  const [planStartTimeHour, setPlanStartTimeHour] = useState(0);
  const [planStartTimeMinute, setPlanStartTimeMinute] = useState(0);
  const [planEndTimeHour, setPlanEndTimeHour] = useState(0);
  const [planEndTimeMinute, setPlanEndTimeMinute] = useState(0);
  const [isClickedStart, setIsClickedStart] = useState(false);
  const [isClickedEnd, setIsClickedEnd] = useState(false);

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

  return (
    <div className="flex flex-col items-start w-full gap-1">
      <div className="flex justify-between w-full">
        <p>계획 시간</p>
        <p>
          {year}년 {month}월 {day}일 {daysOfWeek[dayOfWeek]}요일
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="w-12 h-10 rounded-lg flex items-center justify-center bg-white">
          <FaRegCalendarAlt />
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
