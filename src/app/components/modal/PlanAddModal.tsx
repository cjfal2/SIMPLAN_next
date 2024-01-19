import { getTodayDate } from "@/app/service/getTodayDate";
import React from "react";

type Props = {
  onCancel: () => void;
};

const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];

export default function PlanAddModal({ onCancel }: Props) {
  const [year, month, day, dayOfWeek]: number[] = getTodayDate();
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
              />
              <textarea
                className="rounded-xl p-2 h-20 resize-none"
                placeholder="일정 내용을 입력해주세요."
              ></textarea>
              <div className="flex flex-col items-start w-full gap-1">
                <div className="flex justify-between w-full">
                  {/* TODO: 오늘 날짜로 바꾸기 */}
                  <p>계획 시간</p>
                  <p>
                    {year}년 {month}월 {day}일 {daysOfWeek[dayOfWeek]}요일
                  </p>
                </div>
                {/* TODO: 시간선택이랑 달력 기능 추가 */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-12 h-10 rounded-lg flex items-center justify-center bg-white">
                    <p>달력</p>
                  </div>
                  <div className="w-24 h-10 rounded-lg flex items-center justify-center bg-white">
                    <p>00:00</p>
                  </div>
                  <p>~</p>
                  <div className="w-24 h-10 rounded-lg flex items-center justify-center bg-white">
                    <p>00:00</p>
                  </div>
                </div>
                {/* TODO: 컴포넌트 분리 후 UX 고치기 */}
                <div className="flex flex-col mt-2 items-start justify-start gap-1">
                  <p>카테고리</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 bg-orange-400 rounded-lg hover:cursor-pointer hover:scale-95">
                      직접성과
                    </div>
                    <div className="p-2 bg-orange-200 rounded-lg hover:cursor-pointer hover:scale-95">
                      직접성과
                    </div>
                    <div className="p-2 bg-orange-200 rounded-lg hover:cursor-pointer hover:scale-95">
                      직접성과
                    </div>
                    <div className="p-2 bg-orange-200 rounded-lg hover:cursor-pointer hover:scale-95">
                      직접성과
                    </div>
                    <div className="p-2 bg-orange-200 rounded-lg hover:cursor-pointer hover:scale-95">
                      직접성과
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* TODO: 취소 / 등록 기능 더 디테일하게 만들기 */}
            <div className="flex gap-2">
              <button
                onClick={() => onCancel()}
                className="bg-gray-300 py-2 px-6 rounded-xl"
              >
                취소
              </button>

              <button className="bg-blue-300 py-2 px-6 rounded-xl">등록</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
