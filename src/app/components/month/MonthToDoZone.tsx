"use client";

import { getSomedayToDo } from "@/app/apis/getToDo";
import { DailyToDoType } from "@/app/model/types";
import React, { useEffect, useState } from "react";
import ToDoItem from "../overall/todo/ToDoItem";

interface Props {
  year: number;
  month: number;
  someday: number;
  dayOfWeek: string;
}

export default function MonthToDoZone({
  year,
  month,
  someday,
  dayOfWeek,
}: Props) {
  const [somedayToDo, setSomedayToDo] = useState<DailyToDoType>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temp = await getSomedayToDo(year, month, someday);
        setSomedayToDo(temp);
      } catch (error) {
        // 에러 처리 코드를 추가할 수 있습니다.
        console.error("비동기 작업 중 에러 발생:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [someday, dayOfWeek]);

  return (
    <div className="w-full">
      <div className="text-lg font-bold">
        {year}년 {month}월 {someday}일 {dayOfWeek}요일
      </div>
      <div className="grid grid-cols-2 gap-2">
        {somedayToDo.map((toDo) => (
          <div key={toDo.id}>
            <ToDoItem toDo={toDo} />
          </div>
        ))}
      </div>
    </div>
  );
}
