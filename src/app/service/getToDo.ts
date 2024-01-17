import { readFile } from "fs/promises";
import path from "path";
import { DailyToDoType, ToDoDataType } from "../model/types";

export async function getAllToDo(): Promise<ToDoDataType> {
  const filePath = path.join(process.cwd(), "data", "tododata.json");
  return readFile(filePath, "utf-8").then<ToDoDataType>(JSON.parse);
}

export async function getTodayToDo(): Promise<DailyToDoType> {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();
  
  // getAllToDo 함수의 실행이 완료될 때까지 기다림
  const allToDoData = await getAllToDo();
  // console.log(`${year}-${month}-${day}`);
  // console.log(allToDoData);
  return allToDoData[`${year}-${month}-${day}`];
}