import React from "react";

type Props = {
  clickButton: (click: string) => void;
  where: string;
};

export default function StatNav({ clickButton, where }: Props) {
  return (
    <nav>
      <div className="flex justify-evenly items-center w-full">
        <button
          className={`px-4 py-2 w-full hover:scale-95 hover:bg-opacity-90
            ${where === "week" ? "bg-main" : "bg-bg"}
          `}
          onClick={() => clickButton("week")}
        >
          주간통계
        </button>
        <button
          className={`px-4 py-2 w-full hover:scale-95 hover:bg-opacity-90
            ${where === "month" ? "bg-main" : "bg-bg"}
          `}
          onClick={() => clickButton("month")}
        >
          월간통계
        </button>
      </div>
    </nav>
  );
}
