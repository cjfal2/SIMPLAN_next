import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

type Props = {
  chartData: Status;
  what: string;
};

type Status = {
  [key: string]: number;
};

export default function BarChart({ chartData, what }: Props) {
  const label =
    what === "status"
      ? ["진행중", "완료", "미룸", "취소"]
      : ["직접성과", "간접성과", "개인활동", "자기계발", "네트워킹"];
  const bgColor =
    what === "status"
      ? ["#D1D1D1", "#48EE8F", "#7D87FF", "#FF5966"]
      : ["#FF99CC ", "#99CCFF ", "#FFFF99 ", "#66FF99 ", "#FFB366 "];
  const data = {
    labels: label,
    datasets: [
      {
        label: what,
        backgroundColor: bgColor,
        data: Object.values(chartData),
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
