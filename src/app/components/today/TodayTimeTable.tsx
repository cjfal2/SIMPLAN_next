import React from "react";
import { getTodayToDo } from "@/app/apis/getToDo";
import { DailyToDoType } from "@/app/model/types";

const times: string[] = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
];

export default async function TodayTimeTable() {
  // planStartTime가 앞 00이 아닌 것을 다 가져오고 {"00": [{ 정보 }]} 형태로 저장
  const allToDo: DailyToDoType = await getTodayToDo();



  return (
    <div>
      <div className="text-2xl font-bold bg-[#FAC69F] py-1 rounded-t-xl">
        TodayTimeTable
      </div>
      <div className="rounded-b-xl overflow-auto">
        <div className="flex bg-white">
          <div className="flex-grow max-h-[24svh] justify-start items-start flex-col overflow-auto">
            {times.map((time) => (
              <div key={time} className="flex justify-start items-center gap-2">
                <div className="px-2 py-2 border-r-4 border-black">
                  {time}
                </div>
                <div>
                  아이템
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
