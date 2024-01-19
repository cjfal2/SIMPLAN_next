import React from "react";

type Props = {
  isClickedEnd: boolean;
  clickEndTime: () => void;
  clickEndHour: (num: number) => void;
  clickEndMinute: (num: number) => void;
  planEndTimeHour: number;
  planEndTimeMinute: number;
};
const hours: number[] = Array.from({ length: 24 }, (_, index) => index);
const minutes: number[] = Array.from({ length: 60 }, (_, index) => index);

export default function TimeDropMinute({
  isClickedEnd,
  clickEndTime,
  clickEndHour,
  clickEndMinute,
  planEndTimeHour,
  planEndTimeMinute,
}: Props) {
  return (
    <div
      id="시작"
      className="relative hover:cursor-pointer w-24 min-h-10 max-h-[300px] rounded-lg flex items-center justify-center bg-white"
    >
      <div className="flex flex-col w-full">
        <span onClick={() => clickEndTime()}>
          {planEndTimeHour}시 {planEndTimeMinute}분
        </span>
        {isClickedEnd ? (
          <div className="z-39 absolute top-full flex flex-col w-full">
            <div className="flex w-full">
              <div className="w-full max-h-[200px] overflow-auto scrollbar-hide bg-slate-50">
                <p className="border-b-2 sticky top-0 bg-slate-200">hour</p>
                {hours.map((hour) => (
                  <p
                    key={hour}
                    className="hover:bg-blue-200"
                    onClick={() => clickEndHour(hour)}
                  >
                    {hour}
                  </p>
                ))}
              </div>
              <div className="w-full max-h-[200px] overflow-auto scrollbar-hide bg-slate-50">
                <p className="bg-slate-200 sticky top-0 border-b-2">min</p>
                {minutes.map((min) => (
                  <p
                    key={min}
                    className="hover:bg-blue-200"
                    onClick={() => clickEndMinute(min)}
                  >
                    {min}
                  </p>
                ))}
              </div>
            </div>
            <p className="bg-white rounded-b-md" onClick={() => clickEndTime()}>
              닫기
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
