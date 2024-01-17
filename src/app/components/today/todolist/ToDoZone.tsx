import React from "react";
import ToDoItem from "../../overall/todo/ToDoItem";
import { getTodayToDo } from "@/app/service/getToDo";
import { DailyToDoType } from "@/app/model/types";

export default async function ToDoZone() {
  const allToDo: DailyToDoType = await getTodayToDo();
  return (
    <ul className="grid grid-cols-2 gap-2">
      {allToDo.map((toDo) => (
        <li key={toDo.id}>
          <ToDoItem toDo = {toDo}/>
        </li>
      ))}
    </ul>
  );
}
