"use client";

import React, { useState } from "react";
import DatePick from ".././DatePick";
import { ToDoItemType } from "@/app/model/types";
import ToDoDetailCheckBox from "./ToDoDetailCheckBox";
import { deletePlan } from "@/app/api/deletePlan";
import { putPlan } from "@/app/api/putPlan";

type Props = {
  toDo: ToDoItemType;
  onCancel: () => void;
};

const cate: Record<string, string> = {
  DIRECT: "직접성과",
  INDIRECT: "간접성과",
  PRIVATE: "개인활동",
  SELFDEV: "자기계발",
  NETWORK: "네트워킹",
};
// 계획 타입 (DIRECT, INDIRECT, PRIVATE, SELFDEV, NETWORK)
const categories = ["직접성과", "간접성과", "개인활동", "자기계발", "네트워킹"];
const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];

export default function ToDoDetailModal({ toDo, onCancel }: Props) {
  const [category, setCategory] = useState<string>(cate[toDo.category]);
  // textarea의 내용이 변경
  const [newContent, setNewContent] = useState<string>(toDo.content);
  const changeContent = (content: string) => {
    setNewContent(content);
  };
  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewContent(event.target.value);
  };

  // inputarea의 내용 변경
  const [newTitle, setNewTitle] = useState<string>(toDo.title);
  const changeTitle = (title: string) => {
    setNewTitle(title);
  };
  // textarea의 내용이 변경될 때 호출되는 함수
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  // Date 객체 생성
  const startDate = new Date(toDo.planStartTime.toString());
  const endDate = new Date(toDo.planEndTime.toString());

  // 년, 월, 일, 요일 추출
  const yearToday = startDate.getFullYear();
  const monthToday = startDate.getMonth() + 1;
  const dayToday = startDate.getDate();
  const dayOfWeekToday = startDate.getDay();

  // 시, 분 추출
  const hoursStart = startDate.getHours();
  const minutesStart = startDate.getMinutes();

  const hoursEnd = endDate.getHours();
  const minutesEnd = endDate.getMinutes();

  const [year, setYear] = useState<number>(yearToday);
  const [month, setMonth] = useState<number>(monthToday);
  const [day, setDay] = useState<number>(dayToday);
  const [planStartTimeHour, setPlanStartTimeHour] = useState(hoursStart);
  const [planStartTimeMinute, setPlanStartTimeMinute] = useState(minutesStart);
  const [planEndTimeHour, setPlanEndTimeHour] = useState(hoursEnd);
  const [planEndTimeMinute, setPlanEndTimeMinute] = useState(minutesEnd);

  const clickPlanStartHour = (num: number) => {
    setPlanStartTimeHour(num);
  };

  const clickPlanStartMinute = (num: number) => {
    setPlanStartTimeMinute(num);
  };

  const clickPlanEndHour = (num: number) => {
    setPlanEndTimeHour(num);
  };

  const clickPlanEndMinute = (num: number) => {
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

  const [realStartTimeHour, setRealStartTimeHour] = useState(hoursStart);
  const [realStartTimeMinute, setRealStartTimeMinute] = useState(minutesStart);
  const [realEndTimeHour, setRealEndTimeHour] = useState(hoursEnd);
  const [realEndTimeMinute, setRealEndTimeMinute] = useState(minutesEnd);
  const clickRealStartHour = (num: number) => {
    setRealStartTimeHour(num);
  };

  const clickRealStartMinute = (num: number) => {
    setRealStartTimeMinute(num);
  };

  const clickRealEndHour = (num: number) => {
    setRealEndTimeHour(num);
  };

  const clickRealEndMinute = (num: number) => {
    setRealEndTimeMinute(num);
  };

  const [nowStatus, setNowStatus] = useState(toDo.status);
  const changeStatus = (str: string) => {
    setNowStatus(str);
  };

  const clickDelete = (id: number) => {
    // 사용자에게 컨펌 메시지를 표시
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");

    // 사용자가 확인을 선택한 경우에만 삭제 작업을 수행
    if (isConfirmed) {
      deletePlan(id)
        .then(() => {
          // 삭제 작업 완료 후 페이지를 새로 고침
          window.location.reload();
        })
        .catch((error) => {
          console.error("삭제 중 오류 발생:", error);
        });
    } else {
      // 사용자가 취소를 선택한 경우 아무 동작도 수행하지 않음
      console.log("삭제가 취소되었습니다.");
    }
  };

  const clickModify = () => {
    const isConfirmed = window.confirm("정말로 수정하시겠습니까?");

    // 사용자가 확인을 선택한 경우에만 수정 작업을 수행
    if (isConfirmed) {
      putPlan(
        year,
        month,
        day,
        planStartTimeHour,
        planStartTimeMinute,
        planEndTimeHour,
        planEndTimeMinute,
        realStartTimeHour,
        realStartTimeMinute,
        realEndTimeHour,
        realEndTimeMinute,
        category,
        newTitle,
        newContent,
        nowStatus,
        toDo.id
      )
        .then(() => {
          // 수정 작업 완료 후 페이지를 새로 고침
          window.location.reload();
        })
        .catch((error) => {
          console.error("수정 중 오류 발생:", error);
        });
    } else {
      // 사용자가 취소를 선택한 경우 아무 동작도 수행하지 않음
      console.log("수정이 취소되었습니다.");
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pt-16">
        {/*content*/}
        <div
          id="뒷배경"
          className="absolute opacity-25 w-full h-full inset-0 bg-black"
        ></div>
        <div
          id="모달내용"
          className="absolute min-w-[350px] max-w-[60%] bg-[#FDE7D7] shadow-2xl rounded-2xl z-45"
        >
          {/*header*/}
          <p className="font-bold text-center pt-3 text-xl">일정 체크</p>
          {/* contents */}
          <div className="w-full flex flex-col items-center justify-center pt-3 pb-3 px-6 gap-5">
            <form action="" className="w-full flex flex-col gap-2">
              <ToDoDetailCheckBox
                status={nowStatus}
                changeStatus={changeStatus}
              />
              <input
                type="text"
                className="rounded-xl h-10 px-2"
                placeholder="일정 제목을 써주세요.(최대 12자)"
                minLength={1}
                maxLength={12}
                onChange={handleTitleChange}
                value={newTitle}
              ></input>
              <textarea
                className="rounded-xl p-2 h-20 resize-none"
                placeholder="일정 내용을 입력해주세요."
                onChange={handleContentChange}
                value={newContent}
              ></textarea>
              <div className="flex flex-col items-start w-full gap-1">
                {/* TODO: DetailDatePick 도 만들어야 할듯 */}
                <DatePick
                  year={year}
                  month={month}
                  day={day}
                  planStartTimeHour={planStartTimeHour}
                  planStartTimeMinute={planStartTimeMinute}
                  planEndTimeHour={planEndTimeHour}
                  planEndTimeMinute={planEndTimeMinute}
                  dayOfWeekToday={dayOfWeekToday}
                  clickStartHour={clickPlanStartHour}
                  clickStartMinute={clickPlanStartMinute}
                  clickEndHour={clickPlanEndHour}
                  clickEndMinute={clickPlanEndMinute}
                  changeYear={changeYear}
                  changeMonth={changeMonth}
                  changeDay={changeDay}
                  flag={"계획"}
                />
                <DatePick
                  year={year}
                  month={month}
                  day={day}
                  planStartTimeHour={realStartTimeHour}
                  planStartTimeMinute={realStartTimeMinute}
                  planEndTimeHour={realEndTimeHour}
                  planEndTimeMinute={realEndTimeMinute}
                  dayOfWeekToday={dayOfWeekToday}
                  clickStartHour={clickRealStartHour}
                  clickStartMinute={clickRealStartMinute}
                  clickEndHour={clickRealEndHour}
                  clickEndMinute={clickRealEndMinute}
                  changeYear={changeYear}
                  changeMonth={changeMonth}
                  changeDay={changeDay}
                  flag={"실제"}
                />
                <div className="flex flex-col mt-2 items-start justify-start gap-1">
                  <p>카테고리</p>
                  <div className="grid grid-cols-3 gap-2">
                    {categories.map((cates) => (
                      <div
                        key={cates}
                        onClick={() => setCategory(cates)}
                        className={`p-2 rounded-lg hover:cursor-pointer hover:scale-95
                        ${cates === category ? "bg-sub" : "bg-main_white"}
                        hover:bg-opacity-70
                        `}
                      >
                        {cates}
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
                onClick={() => clickDelete(toDo.id)}
                className="bg-forbiden py-2 px-6 rounded-xl"
              >
                삭제
              </button>

              <button
                onClick={() => clickModify()}
                className="bg-info py-2 px-6 rounded-xl"
              >
                수정
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
