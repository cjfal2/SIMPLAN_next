import React from "react";
import ToDoItem from "../../overall/todo/ToDoItem";
import { getTodayToDo } from "@/app/service/getToDo";
import { DailyToDoType } from "@/app/model/types";
import ToDoAdd from "../../overall/todo/ToDoAdd";

export default async function ToDoZone() {
  const allToDo: DailyToDoType = await getTodayToDo();
  // 일정이 8개가 넘으면 추가버튼이 보이지 않게 설정 + 일정이 0인 것을 파악
  const ToDoAmount: number = allToDo ? allToDo.length : 0;

  if (ToDoAmount === 0) {
    return <div>일정이 없습니다.</div>;
  } else {
    const sortedAllToDo = allToDo
      .filter((item) => item.planStartTime !== "00:00")
      .sort((a, b) => a.planStartTime.localeCompare(b.planStartTime));

    const noTimeToDo = allToDo.filter((item) => item.planStartTime === "00:00");
    
    const now = new Date();
    const nowHour = now.getHours();
    const nowMinute = now.getMinutes();
    const nowTime = `${nowHour}:${nowMinute}`;


    return (
      <div className="w-full">
        <div>다음 일정</div>

        <div>시간표</div>
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
        <div>시간을 정하지 않은 일정</div>
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
