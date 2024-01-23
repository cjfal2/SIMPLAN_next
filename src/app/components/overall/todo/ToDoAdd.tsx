"use client";

import React, { useState } from "react";
import { CgAddR } from "react-icons/cg";
import PlanAddModal from "../../modal/PlanAddModal";

export default function ToDoAdd() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="h-full">
      <div
        className="
          bg-[#ffe6c6]
          rounded-2xl
          p-2 flex items-center justify-center
          hover:cursor-pointer hover:scale-95
          h-full
        "
        onClick={() => setShowModal(true)}
      >
        <CgAddR className="w-8 h-8 m-1" />
      </div>
      {showModal ? <PlanAddModal onCancel={closeModalHandler} /> : null}
    </div>
  );
}
