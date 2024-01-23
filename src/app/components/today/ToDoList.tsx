import React from "react";
import SortCategory from "./todolist/SortCategory";
import TodayMD from "./todolist/TodayMD";
import LinkToTodayStatistics from "./todolist/LinkToTodayStatistics";
import ToDoZone from "./todolist/ToDoZone";

export default async function ToDoList() {
  return (
    <div className="mb-4">
      <div className="flex justify-center pb-2">
        {/* 전날 다음날 같은게 있으면 어떨까? 지금건 딱히 필요없는 기능같음 */}
        {/* <SortCategory /> */}
        <TodayMD />
        {/* <LinkToTodayStatistics /> */}
      </div>
      <ToDoZone />
    </div>
  );
}
