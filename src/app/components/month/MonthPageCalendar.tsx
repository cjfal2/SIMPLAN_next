"use client";

import { getCalendar } from "@/app/apis/getCalendar";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

// 요일 별로 폰트색을 다르게 부여
const daysOfWeek: string[][] = [
  ["일", "text-red-600"],
  ["월", "text-black"],
  ["화", "text-black"],
  ["수", "text-black"],
  ["목", "text-black"],
  ["금", "text-black"],
  ["토", "text-blue-600"],
];

// 타입 프롭스 선언
type Props = {
  year: number;
  month: number;
  day: number;
  dayOfWeek: string;
  setSomeday: (y: number, m: number, d: number, w: string) => void;
};

export default function MonthPageCalendar({
  year,
  month,
  day,
  dayOfWeek,
  setSomeday,
}: Props) {
  const [newYear, setNewYear] = useState<number>(year); // 바꿀 년도
  const [newMonth, setNewMonth] = useState<number>(month); // 바꿀 월
  const [newDay, setNewDay] = useState<number>(day); // 바꿀 날
  const [newDOW, setNewDOW] = useState<string>(dayOfWeek);
  const [calendar, setCalendar] = useState<number[][]>(
    getCalendar(newYear, newMonth - 1)
  ); // 해당 년/월 의 캘린더 정보

  useEffect(() => {
    setCalendar(getCalendar(newYear, newMonth - 1));
  }, [newYear, newMonth]); // useEffect를 사용하여 년/월이 바뀌는 것을 계속 추적

  useEffect(() => {
    setSomeday(newYear, newMonth, newDay, newDOW);
  }, [newYear, newMonth, newDay, newDOW, setSomeday]);

  /** 월을 이동하는 함수.  m: 지금 월 , w: 월을 더하는지 빼는지 */
  const selMonth = (m: number, w: boolean) => {
    if (w) {
      // 더하기
      if (newMonth === 12) {
        setNewMonth(1);
        setNewYear(newYear + 1);
      } else {
        setNewMonth(newMonth + 1);
      }
    } else {
      // 빼기
      if (newMonth === 1) {
        setNewMonth(12);
        setNewYear(newYear - 1);
      } else {
        setNewMonth(newMonth - 1);
      }
    }
  };

  /** 날짜를 고르는 함수. 이전 달이나 다음 달인 경우 년도와 월을 바꿔준다. */
  const selDay = (d: number, w: number, idx: number) => {
    if (w === 0) {
      selMonth(newMonth, false);
    } else if (w === 2) {
      selMonth(newMonth, true);
    }

    setNewDay(d);
    setNewDOW(daysOfWeek[idx % 7][0]);
  };

  return (
    <div className="flex flex-col justify-center items-center  w-full">
      <div className="rounded-t-md flex justify-between w-full bg-orange-200 px-2 py-2 items-center">
        {/* 월 이동 버튼 왼쪽 */}
        <FaArrowAltCircleLeft
          onClick={() => selMonth(newMonth, false)}
          className="hover:cursor-pointer hover:scale-105"
        />
        <p className="font-bold select-none">
          {newYear}년 {newMonth}월
        </p>
        {/* 월 이동 버튼 오른쪽 */}
        <FaArrowAltCircleRight
          onClick={() => selMonth(newMonth, true)}
          className="hover:cursor-pointer hover:scale-105"
        />
      </div>
      {/* 달력 부분 */}
      <div className="grow w-full bg-orange-100 py-2">
        {/* 그리드를 통하여 달력을 표현 */}
        <div className="grid grid-cols-7 gap-0.5 px-1">
          {/* 요일 출력 */}
          {daysOfWeek.map((dayOfWeek) => (
            <div
              key={dayOfWeek[0]}
              className={`${dayOfWeek[1]} bg-orange-300 px-2 rounded-md select-none`}
            >
              {dayOfWeek[0]}
            </div>
          ))}
          {/* 달력 출력 */}
          {/* 달력은 이전 달과 다음 달에 남은 부분을 회색으로 표시 */}
          {/* 선택된 날은 초록색 테두리와 이너섀도우로 표시 */}
          {calendar.map((date, index) => (
            <div
              key={index}
              onClick={() => selDay(date[0], date[1], index)}
              className={`select-none
                      h-10
                      rounded-md
                      hover:cursor-pointer
                      hover:scale-105
                      hover:bg-opacity-45
                      text-xs
                      font-bold
                      ${
                        date[1] === 0 || date[1] === 2
                          ? "bg-gray-300"
                          : index % 7 === 0
                          ? "bg-red-300"
                          : (index + 1) % 7 === 0
                          ? "bg-blue-400"
                          : "bg-orange-200"
                      }
                      ${(date[1] === 0 || date[1] === 2) && "text-gray-400"}
                      ${
                        newDay === date[0] &&
                        date[1] === 1 &&
                        "border-2 border-green-400 shadow-innerDown"
                      }
                    `}
            >
              {date[0]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
