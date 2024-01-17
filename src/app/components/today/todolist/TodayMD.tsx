import React from "react";

export default function TodayMD() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  return (
    <div className="text-2xl font-semibold">{`${month + 1}월 ${day}일`}</div>
  );
}
