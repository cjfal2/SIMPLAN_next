"use client";

import React, { useState } from "react";
import { CgAddR } from "react-icons/cg";
import PlanAddMadal from "../../modal/PlanAddMadal";

export default function ToDoAdd() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div>
      <div
        className="
          bg-[#ffe6c6]
          rounded-2xl
          p-2 flex items-center justify-center
          hover:cursor-pointer hover:scale-95
        "
        onClick={() => setShowModal(true)}
      >
        <CgAddR className="w-8 h-8 m-1" />
      </div>
      {showModal ? <PlanAddMadal onCancel={closeModalHandler} /> : null}
    </div>
  );
}
