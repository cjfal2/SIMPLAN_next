import React from "react";
import SortCategory from "./todolist/SortCategory";
import TodayMD from "./todolist/TodayMD";
import LinkToTodayStatistics from "./todolist/LinkToTodayStatistics";
import ToDoZone from "./todolist/ToDoZone";

export default async function ToDoList() {
  return (
    <div className="mb-4">
      <div className="flex justify-between pb-2">
        <SortCategory />
        <TodayMD />
        <LinkToTodayStatistics />
      </div>
      <ToDoZone />
    </div>
  );
}
