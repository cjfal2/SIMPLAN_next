"use client";

import React, { useState } from "react";
import DatePick from "./DatePick";
import { getTodayDate } from "@/app/service/getTodayDate";
import { addPlan } from "@/app/api/addPlan";

type Props = {
  onCancel: () => void;
};
// 계획 타입 (DIRECT, INDIRECT, PRIVATE, SELFDEV, NETWORK)
const categories = ["직접성과", "간접성과", "개인활동", "자기계발", "네트워킹"];
const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];

export default function PlanAddModalForm({ onCancel }: Props) {
  const [category, setCategory] = useState("직접성과");

  let [yearToday, monthToday, dayToday, dayOfWeekToday]: number[] =
    getTodayDate();

  // textarea의 내용이 변경
  const [newContent, setNewContent] = useState<string>("");
  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewContent(event.target.value);
  };

  // inputarea의 내용 변경
  const [newTitle, setNewTitle] = useState<string>("");
  const changeTitle = (title: string) => {
    setNewTitle(title);
  };
  // inputarea의 내용이 변경될 때 호출되는 함수
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const [year, setYear] = useState<number>(yearToday);
  const [month, setMonth] = useState<number>(monthToday);
  const [day, setDay] = useState<number>(dayToday);
  const [planStartTimeHour, setPlanStartTimeHour] = useState(0);
  const [planStartTimeMinute, setPlanStartTimeMinute] = useState(0);
  const [planEndTimeHour, setPlanEndTimeHour] = useState(0);
  const [planEndTimeMinute, setPlanEndTimeMinute] = useState(0);

  const clickStartHour = (num: number) => {
    setPlanStartTimeHour(num);
  };

  const clickStartMinute = (num: number) => {
    setPlanStartTimeMinute(num);
  };

  const clickEndHour = (num: number) => {
    setPlanEndTimeHour(num);
  };

  const clickEndMinute = (num: number) => {
    setPlanEndTimeMinute(num);
  };

  const changeYear = (num: number) => {
    setYear(num);
  };
  const changeMonth = (num: number) => {
    setMonth(num);
  };
  const changeDay = (num: number) => {
    setDay(num);
  };

  const sendAdd = () => {
    if (newTitle.length > 0 && newContent.length > 0) {
      addPlan(
        year,
        month,
        day,
        planStartTimeHour,
        planStartTimeMinute,
        planEndTimeHour,
        planEndTimeMinute,
        category,
        newTitle,
        newContent
      );
      window.location.reload();
    }
  };

  return (
    <div
      id="모달내용"
      className="absolute min-w-[350px] max-w-[60%] bg-[#FDE7D7] shadow-2xl rounded-2xl z-45"
    >
      {/*header*/}
      <p className="font-bold text-center pt-3 text-xl">일정 추가</p>
      {/* contents */}
      <div className="w-full flex flex-col items-center justify-center pt-3 pb-3 px-6 gap-5">
        <form action="" className="w-full flex flex-col gap-2">
          <input
            type="text"
            className="rounded-xl h-10 px-2"
            placeholder="일정 제목을 써주세요.(최대 12자)"
            minLength={1}
            maxLength={12}
            onChange={handleTitleChange}
            value={newTitle}
          />
          <textarea
            className="rounded-xl p-2 h-20 resize-none"
            placeholder="일정 내용을 입력해주세요."
            onChange={handleContentChange}
            value={newContent}
          ></textarea>
          <div className="flex flex-col items-start w-full gap-1">
            <DatePick
              year={year}
              month={month}
              day={day}
              planStartTimeHour={planStartTimeHour}
              planStartTimeMinute={planStartTimeMinute}
              planEndTimeHour={planEndTimeHour}
              planEndTimeMinute={planEndTimeMinute}
              dayOfWeekToday={dayOfWeekToday}
              clickStartHour={clickStartHour}
              clickStartMinute={clickStartMinute}
              clickEndHour={clickEndHour}
              clickEndMinute={clickEndMinute}
              changeYear={changeYear}
              changeMonth={changeMonth}
              changeDay={changeDay}
              flag={"계획"}
            />
            {/* TODO: 컴포넌트 분리 후 UX 고치기 */}
            <div className="flex flex-col mt-2 items-start justify-start gap-1">
              <p>카테고리</p>
              <div className="grid grid-cols-3 gap-2">
                {categories.map((cate) => (
                  <div
                    key={cate}
                    className={`
                      p-2 rounded-lg hover:cursor-pointer hover:scale-95
                      ${cate === category ? "bg-sub" : "bg-gray"}
                    `}
                    onClick={() => setCategory(cate)}
                  >
                    {cate}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
        {/* TODO: 취소 / 등록 기능 더 디테일하게 만들기 */}
        <div className="flex gap-2">
          <button
            onClick={() => onCancel()}
            className="bg-gray py-2 px-6 rounded-xl"
          >
            취소
          </button>

          <button
            onClick={() => sendAdd()}
            className="bg-info py-2 px-6 rounded-xl"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
}
