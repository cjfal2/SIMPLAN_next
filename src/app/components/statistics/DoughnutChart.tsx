import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
type Props = {
  chartData: Status;
  what: string;
};

type Status = {
  [key: string]: number;
};
export function DoughnutChart({ chartData, what }: Props) {
  const label =
    what === "status"
      ? ["진행중", "완료", "미룸", "취소"]
      : ["직접성과", "간접성과", "개인활동", "자기계발", "네트워킹"];
  const bgColor =
    what === "status"
      ? ["#D1D1D1", "#48EE8F", "#7D87FF", "#FF5966"]
      : ["#FF99CC ", "#99CCFF ", "#FFFF99 ", "#66FF99 ", "#FFB366 "];
  const borderColor =
    what === "status"
      ? ["#CCCCCC", "#98FB98", "#B0C4DE", "#FFA07A"]
      : ["#FFCCCC ", "#CCCCFF ", "#FFFFCC ", "#CCFFCC ", "#FFD699 "];
  const data = {
    labels: label,
    datasets: [
      {
        label: what,
        data: Object.values(chartData),
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="px-20">
      <Doughnut data={data} />
    </div>
  );
}
