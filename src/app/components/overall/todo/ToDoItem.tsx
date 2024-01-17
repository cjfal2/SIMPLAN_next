import React from "react";
import ToDoCheckBox from "./ToDoCheckBox";
import { ToDoItemType } from "@/app/model/types";
import ToDoName from "./ToDoName";

type Props = {
  toDo: ToDoItemType;
};

const colors: { [state: string]: string } = {
  "yet": "white",
  "done": "#48EE8F",
  "delay": "#7D87FF",
  "cancel": "#FF5966",
};

export default function ToDoItem({ toDo }: Props) {
  return (
    <div className="bg-white rounded-2xl flex p-2 items-center gap-2">
      <ToDoCheckBox />
      <div className="flex flex-col items-start">
        <ToDoName name={toDo.name} color={colors[toDo.state]}/>
        <div className="flex gap-1 items-center">
          <div className="text-xs text-gray-500">{`${toDo.planStartTime.toString()}~${toDo.planEndTime.toString()}`}</div>
          <div className="text-xs bg-[#FAC69F] rounded-md px-1.5 py-0.5">
            {toDo.category}
          </div>
        </div>
      </div>
    </div>
  );
}
