import { readFile } from "fs/promises";
import path from "path";
import { DailyToDoType, ToDoDataType } from "../model/types";

export async function getAllToDo(): Promise<ToDoDataType> {
  const filePath = path.join(process.cwd(), "data", "tododata.json");
  return readFile(filePath, "utf-8").then<ToDoDataType>(JSON.parse);
}

export async function getTodayToDo() {
  const accessToken = localStorage.getItem("accessToken");

  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();
  const date = `${year}-${month}-${day}`;

  const queryParams = new URLSearchParams();
  queryParams.append("query", "day");
  queryParams.append("date", date);
  let todayToDo: DailyToDoType = new Array();
  const apiUrl = "http://15.165.216.177:8080/plan";
  if (accessToken) {
    // 토큰이 있는 경우, 백엔드에 요청하여 개인 정보 가져오기
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // 받아온 개인 정보를 사용
        console.log(data)
        todayToDo.push(data);
      })
      .catch((error) => {
        // 오류 처리
        console.error("개인 정보 요청 중 오류 발생:", error);
      });
  } else {
    // 토큰이 없는 경우, 로그인 페이지로 리디렉션 또는 처리
    console.log("토큰이 없습니다. 로그인 페이지로 이동하세요.");
  }
  return todayToDo;
}

export async function getSomedayToDo(
  year: number,
  month: number,
  day: number | string
): Promise<DailyToDoType> {
  // getAllToDo 함수의 실행이 완료될 때까지 기다림
  const allToDoData = await getAllToDo();

  return allToDoData[`${year}-${month}-${day}`];
}
