"use client";

import { getSomedayToDo } from "@/app/apis/getToDo";
import { DailyToDoType } from "@/app/model/types";
import React, { useEffect, useState } from "react";

interface Props {
  year: number;
  month: number;
  someday: number;
  idx: number;
}

const colors: string[] = [
  "bg-red-100",
  "bg-orange-100",
  "bg-yellow-100",
  "bg-green-100",
  "bg-blue-100",
  "bg-cyan-100",
  "bg-purple-100",
];

export default function WeekItem({ year, month, someday, idx }: Props) {
  const [somedayToDo, setSomedayToDo] = useState<DailyToDoType>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const todayToDoData = await getSomedayToDo(year, month, someday);
        setSomedayToDo(todayToDoData);
      } catch (error) {
        console.error("데이터를 불러오는 도중 오류가 발생했습니다:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ToDoAmount: number = somedayToDo ? somedayToDo.length : 0;

  return (
    <div className="grid grid-cols-2 w-4/5">
      {ToDoAmount ? (
        somedayToDo.map((toDo) => (
          <p
            key={toDo.id}
            className={`text-sm px-2 py-0.5 truncate m-0.5 rounded-lg ${colors[idx]}`}
          >
            {toDo.title}
          </p>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
