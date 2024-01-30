"use client";

import React, { useEffect, useState } from "react";
import ToDoItem, { transTime } from "../../overall/todo/ToDoItem";
import { getTodayToDo } from "@/app/apis/getToDo";
import { DailyToDoType, ToDoItemType } from "@/app/model/types";
import ToDoAdd from "../../overall/todo/ToDoAdd";
import ToDoNextItem from "./ToDoNextItem";

function findNextTime(dataArray: DailyToDoType) {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  console.log(currentHour, currentMinute, "!!!!!!!!");

  // TODO: 로직이 이상함
  let nextTimeObjects: ToDoItemType | null = null;

  for (let i = 0; i < dataArray.length; i++) {
    const [planHour, planMinute] = transTime(
      dataArray[i].planStartTime.toString()
    )
      .split(":")
      .map(Number);
    console.log(planHour, planMinute, "ads");

    if (
      planHour > currentHour ||
      (planHour === currentHour && planMinute >= currentMinute)
    ) {
      // 현재 시간 이후의 첫 번째 항목을 찾으면 반복문을 빠져나감.
      nextTimeObjects = dataArray[i];
      break;
    }
  }

  return nextTimeObjects;
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

    const noTimeToDo = allToDo.filter(
      (item) => transTime(item.planStartTime.toString()) === "00:00"
    );
    const nextToDo = findNextTime(sortedAllToDo);
    return (
      <div className="w-full">
        <div>다음 일정</div>
        {nextToDo ? (
          <ToDoNextItem toDo={nextToDo} />
        ) : (
          <div>다음 일정이 없습니다.</div>
        )}
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
