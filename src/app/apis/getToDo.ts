import axios from "axios";
import { DailyToDoType } from "../model/types";
import { transNumber } from "./transNumer";


export async function getTodayToDo() {
  const accessToken = await getAccessToken();

  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();
  const m = transNumber(month);
  const d = transNumber(day);
  const date = `${year}-${m}-${d}`;

  let todayToDo: DailyToDoType = new Array();
  const apiUrl = "/plan";

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

export async function getSomedayToDo(year: number, month: number, day: number) {
  const accessToken = await getAccessToken();

  const apiUrl = "/plan";
  const allToDoData: any[] = [];
  const m = transNumber(month);
  const d = transNumber(day);
  const date = `${year}-${m}-${d}`;

  if (accessToken) {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          query: "week",
          date: date,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      // 받아온 데이터를 사용
      if (response.data.data[date]) {
        allToDoData.push(...response.data.data[date]);
      }
      else {
        console.log("일정이 없음")
      }
    } catch (error) {
      // 오류 처리
      console.error("주 일정 정보 요청 중 오류 발생:", error);
    }
  } else {
    // 토큰이 없는 경우, 로그인 페이지로 리디렉션 또는 처리
    console.log("토큰이 없습니다. 로그인 페이지로 이동하세요.");
  }

  return allToDoData;
}

async function getAccessToken() {
  return new Promise<string | null>((resolve) => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("token");
      resolve(accessToken);
    } else {
      resolve(null);
    }
  });
}
