"use client";

import React, { useEffect, useState } from "react";
import ToDoItem, { transTime } from "../../overall/todo/ToDoItem";
import { getTodayToDo } from "@/app/service/getToDo";
import { DailyToDoType } from "@/app/model/types";
import ToDoAdd from "../../overall/todo/ToDoAdd";

function findNextTime(dataArray: DailyToDoType) {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // TODO: 로직이 이상함
  const nextTimeObjects = dataArray.map((data) => {
    const [planHour, planMinute] = transTime(data.planStartTime.toString()).split(':').map(Number);

    const isNextDay = currentHour > planHour || (currentHour === planHour && currentMinute >= planMinute);

    const nextTime = isNextDay
      ? `${String(planHour).padStart(2, '0')}:${String(planMinute).padStart(2, '0')}`
      : transTime(data.planStartTime.toString());

    return data;
  });

  return nextTimeObjects[0];
}


export default function ToDoZone() {
  const [allToDo, setAllToDo] = useState<DailyToDoType>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const todayToDoData = await getTodayToDo();
        setAllToDo(todayToDoData);
      } catch (error) {
        console.error("데이터를 불러오는 도중 오류가 발생했습니다:", error);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 일정이 8개가 넘으면 추가버튼이 보이지 않게 설정 + 일정이 0인 것을 파악
  const ToDoAmount: number = allToDo ? allToDo.length : 0;

  if (ToDoAmount === 0) {
    return (
      <div>
        <ToDoAdd />
      </div>
    );
  } else {
    const sortedAllToDo = allToDo
      .filter((item) => transTime(item.planStartTime.toString()) !== "00:00")
      .sort((a, b) => a.planStartTime.localeCompare(b.planStartTime));

    const noTimeToDo = allToDo.filter((item) => transTime(item.planStartTime.toString()) === "00:00");
    const nextToDo = findNextTime(sortedAllToDo);

    return (
      <div className="w-full">
        <div>다음 일정</div>
          <ToDoItem toDo={nextToDo}/>
        <div className="mt-4">시간표</div>
        <ul className="grid grid-cols-2 gap-2 w-full">
          {sortedAllToDo.map((toDo) => (
            <li key={toDo.id}>
              <ToDoItem toDo={toDo} />
            </li>
          ))}
          {ToDoAmount < 8 ? (
            <li>
              <ToDoAdd />
            </li>
          ) : (
            <></>
          )}
        </ul>
        <div className="mt-4">시간을 정하지 않은 일정</div>
        <ul className="grid grid-cols-2 gap-2 w-full">
          {noTimeToDo.map((toDo) => (
            <li key={toDo.id}>
              <ToDoItem toDo={toDo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
