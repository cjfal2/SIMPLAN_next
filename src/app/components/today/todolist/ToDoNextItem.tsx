"use client";

import React, { useState } from "react";
import { ToDoItemType } from "@/app/model/types";
import ToDoDetailModal from "../../modal/tododetail/ToDoDetailModal";
import ToDoCheckBox from "../../overall/todo/ToDoCheckBox";
import ToDoName from "../../overall/todo/ToDoName";

type Props = {
  toDo: ToDoItemType;
};

export function transTime(dateTimeString: string) {
  return dateTimeString.split("T")[1].substring(0, 5);
}

const cate: Record<string, string> = {
  DIRECT: "직접성과",
  INDIRECT: "간접성과",
  PRIVATE: "개인활동",
  SELFDEV: "자기계발",
  NETWORK: "네트워킹",
};

const colors: { [status: string]: string } = {
  DEFAULT: "text-black",
  DONE: "text-[#48EE8F]",
  DELAYED: "text-[#7D87FF]",
  CANCELED: "text-[#FF5966]",
};

export default function ToDoNextItem({ toDo }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div className="h-full">
      <div
        className="bg-white border-main border-2 rounded-2xl flex p-2 items-center gap-2 w-full hover:cursor-pointer hover:scale-95 hover:bg-opacity-85"
        onClick={() => setShowModal(true)}
      >
        <ToDoCheckBox status={toDo.status} />
        <div className="flex justify-between items-start w-full p-2">
          <div className="w-full">
            <ToDoName title={toDo.title} color={colors[toDo.status]} />
            <p className="text-left w-full truncate">{toDo.content}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-500">{`${transTime(
              toDo.planStartTime.toString()
            )}~${transTime(toDo.planEndTime.toString())}`}</div>
            <div className="text-sm bg-[#FAC69F] rounded-md px-1.5 py-0.5">
              {cate[toDo.category]}
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <ToDoDetailModal toDo={toDo} onCancel={closeModalHandler} />
      ) : null}
    </div>
  );
}
