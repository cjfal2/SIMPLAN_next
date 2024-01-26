import React from "react";
import PlanAddModalForm from "./PlanAddModalForm";

type Props = {
  onCancel: () => void;
};

export default function PlanAddModal({ onCancel }: Props) {
  const clickCancel = () => {
    onCancel();
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pt-16">
        {/*content*/}
        <div
          id="뒷배경"
          className="absolute opacity-25 w-full h-full inset-0 bg-black"
        ></div>
        <PlanAddModalForm onCancel={clickCancel} />
      </div>
    </>
  );
}
