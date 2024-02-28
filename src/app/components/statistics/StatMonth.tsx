import { getData } from "@/app/apis/getToDo";
import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import { DoughnutChart } from "./DoughnutChart";

export default function StatMonth() {
  const [statusData, setStatusData] = useState<Record<string, number>>({});
  const [categoryData, setCategoryData] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [status, category] = await getData("month");
        setStatusData(status);
        setCategoryData(category);
      } catch (error) {
        console.error("데이터를 불러오는 도중 오류가 발생했습니다:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        <div>
          <div className="font-bold text-lg">상태</div>
          <BarChart chartData={statusData} what={"status"} />
        </div>
        <div>
          <div className="font-bold text-lg">카테고리</div>
          <DoughnutChart chartData={categoryData} what={"category"} />
        </div>
      </div>
    </>
  );
}
