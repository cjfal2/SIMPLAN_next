"use client";

import React, { useState } from "react";
import DatePick from ".././DatePick";
import { ToDoItemType } from "@/app/model/types";
import ToDoDetailCheckBox from "./ToDoDetailCheckBox";

type Props = {
  toDo: ToDoItemType;
  onCancel: () => void;
};

export default function ToDoDetailModal({ toDo, onCancel }: Props) {
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
              <ToDoDetailCheckBox status={toDo.status} />
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
                {/* <DatePick /> */}
                {/* TODO: DatePickReal 도 만들어야 할듯 */}
                {/* <DatePick /> */}
                {/* TODO: 컴포넌트 분리 후 UX 고치기 */}
                <div className="flex flex-col mt-2 items-start justify-start gap-1">
                  <p>카테고리</p>
                  <div className="grid grid-cols-3 gap-2">
                    {/* TODO: 다른거 누르면 바뀌도록 조정 */}
                    <div className="p-2 bg-orange-400 rounded-lg hover:cursor-pointer hover:scale-95">
                      {toDo.category}
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

              <button
                onClick={() => onCancel()}
                className="bg-red-300 py-2 px-6 rounded-xl"
              >
                삭제
              </button>

              <button
                onClick={() => onCancel()}
                className="bg-blue-300 py-2 px-6 rounded-xl"
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
