import React from "react";
import { BiRectangle } from "react-icons/bi";
import { CgArrowRightR, CgCloseR, CgCheckR, CgAddR } from "react-icons/cg";

type Props = {
  status: string;
};

const iconMapping: Record<string, React.ReactNode> = {
  DEFAULT: <BiRectangle className="w-8 h-8 text-black" />,
  delay: <CgArrowRightR className="w-8 h-8 text-[#7D87FF]" />,
  cancel: <CgCloseR className="w-8 h-8 text-[#FF5966]" />,
  done: <CgCheckR className="w-8 h-8 text-[#48EE8F]" />,
};

export default function ToDoCheckBox({ status }: Props) {
  return <div>{iconMapping[status]}</div>;
}
