import React from "react";
import { CgChevronDownO } from "react-icons/cg";
import { CgChevronUpO } from "react-icons/cg";

export default function SortCategory() {
  return (
    <div className="flex items-center gap-2">
      <div>SortCategory</div>
      <CgChevronDownO className="text-xl"/>
    </div>
  );
}
