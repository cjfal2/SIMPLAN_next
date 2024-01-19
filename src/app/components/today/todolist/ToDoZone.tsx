import React from "react";
import ToDoItem from "../../overall/todo/ToDoItem";
import { getTodayToDo } from "@/app/service/getToDo";
import { DailyToDoType } from "@/app/model/types";
import ToDoAdd from "../../overall/todo/ToDoAdd";

export default async function ToDoZone() {
  const allToDo: DailyToDoType = await getTodayToDo();
  // 일정이 8개가 넘으면 추가버튼이 보이지 않게 설정 + 일정이 0인 것을 파악
  const ToDoAmount: number = allToDo ? allToDo.length : 0;
  return (
    <ul className="grid grid-cols-2 gap-2">
      {ToDoAmount !== 0 ? (
        allToDo.map((toDo) => (
          <li key={toDo.id}>
            <ToDoItem toDo={toDo} />
          </li>
        ))
      ) : (
        <></>
      )}
      {ToDoAmount < 8 ? (
        <li>
          <ToDoAdd />
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
}
