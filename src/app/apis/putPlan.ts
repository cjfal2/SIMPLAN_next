import axios from "axios";
import { transNumber } from './transNumer';

const cate: Record<string, string> = {
  직접성과: "DIRECT",
  간접성과: "INDIRECT",
  개인활동: "PRIVATE",
  자기계발: "SELFDEV",
  네트워킹: "NETWORK",
};


export async function putPlan(
  year: number,
  month: number,
  day: number,
  planStartTimeHour: number,
  planStartTimeMinute: number,
  planEndTimeHour: number,
  planEndTimeMinute: number,
  realStartTimeHour: number,
  realStartTimeMinute: number,
  realEndTimeHour: number,
  realEndTimeMinute: number,
  category: string,
  title: string,
  content: string,
  status: string,
  id: number
) {
  let accessToken: string | null = "";
  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("token");
  }

  const apiUrl = `/plan/${id}`;

  const makeTime = (
    y: number,
    month: number,
    day: number,
    th: number,
    tm: number
  ) => {
    const m = transNumber(month);
    const d = transNumber(day);
    const sh = transNumber(th);
    const sm = transNumber(tm);
    return `${year}-${m}-${d}T${sh}:${sm}:00`;
  };
  const planStartTime = makeTime(
    year,
    month,
    day,
    planStartTimeHour,
    planStartTimeMinute
  );
  const planEndTime = makeTime(
    year,
    month,
    day,
    planEndTimeHour,
    planEndTimeMinute
  );
  const realStartTime = makeTime(
    year,
    month,
    day,
    realStartTimeHour,
    realStartTimeMinute
  );
  const realEndTime = makeTime(
    year,
    month,
    day,
    realEndTimeHour,
    realEndTimeMinute
  );

  try {
    const response = await axios.put(
      apiUrl,
      {
        id: id,
        category: cate[category],
        title: title,
        isImportant: "True",
        planStartTime: planStartTime,
        planEndTime: planEndTime,
        content: content,
        realStartTime: realStartTime,
        realEndTime: realEndTime,
        status: status
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
