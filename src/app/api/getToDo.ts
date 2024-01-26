import path from "path";
import axios from "axios";
import { DailyToDoType, ToDoDataType } from "../model/types";
import { transNumber } from "./transNumer";

// export async function getAllToDo(): Promise<ToDoDataType> {
//   const filePath = path.join(process.cwd(), "data", "tododata.json");
//   return readFile(filePath, "utf-8").then<ToDoDataType>(JSON.parse);
// }

export async function getTodayToDo() {
  let accessToken: string | null = "";
  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("token");
  }

  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();
  const m = transNumber(month);
  const d = transNumber(day);
  const date = `${year}-${m}-${d}`;

  let todayToDo: DailyToDoType = new Array();
  const apiUrl = "https://gittgi.site/plan";

  if (accessToken) {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          query: "day",
          date: date,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      // 받아온 데이터를 사용
      todayToDo.push(...response.data.data[date]);
      console.log(response.data.data[date]);
    } catch (error) {
      // 오류 처리
      console.error("개인 정보 요청 중 오류 발생:", error);
    }
  } else {
    // 토큰이 없는 경우, 로그인 페이지로 리디렉션 또는 처리
    console.log("토큰이 없습니다. 로그인 페이지로 이동하세요.");
  }

  return todayToDo;
}

// export async function getSomedayToDo(
//   year: number,
//   month: number,
//   day: number | string
// ): Promise<DailyToDoType> {
//   // getAllToDo 함수의 실행이 완료될 때까지 기다림
//   const allToDoData = await getAllToDo();

//   return allToDoData[`${year}-${month}-${day}`];
// }
