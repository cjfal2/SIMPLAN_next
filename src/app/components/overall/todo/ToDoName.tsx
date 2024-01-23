"use client";

import React from "react";

type Props = {
  title: string;
  color: string;
};

export default function ToDoName({ title, color }: Props) {
  // 컬러 입히기 제대로 구현 => 아예 처음부터 모든 tailwind 코드 작성
  return (
    <div className={`${color} text-sm font-semibold truncate w-11/12 text-left`}>
      {title}
    </div>
  );
}
