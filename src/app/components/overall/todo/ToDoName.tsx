'use client'

import React from "react";

type Props = {
  name: string;
  color: string;
};

export default function ToDoName({ name, color }: Props) {
  // TODO: 컬러 입히기 제대로 구현해야함
  console.log(name, color)
  return (
    <div className={`text-${color} text-sm font-semibold`}>{name}</div>
  );
}
