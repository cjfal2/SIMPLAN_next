import { getSomedayToDo } from "@/app/service/getToDo";
import React from "react";

interface Props {
  year: number;
  month: number;
  someday: string | number;
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

export default async function WeekItem({ year, month, someday, idx }: Props) {
  const somedayToDo = await getSomedayToDo(year, month, someday);
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
