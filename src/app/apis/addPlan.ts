import axios from 'axios';
import { transNumber } from './transNumer';


const cate: Record<string, string> = {
  "직접성과": "DIRECT",
  "간접성과": "INDIRECT",
  "개인활동": "PRIVATE",
  "자기계발": "SELFDEV",
  "네트워킹": "NETWORK",
};


export async function addPlan(
  year: number,
  month: number,
  day: number,
  planStartTimeHour: number,
  planStartTimeMinute: number,
  planEndTimeHour: number,
  planEndTimeMinute: number,
  category: string,
  title: string,
  content: string
) {
  let accessToken: string | null = "";
  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("token");
  }

  const apiUrl = "/plan";

  const m = transNumber(month);
  const d = transNumber(day);
  const sh = transNumber(planStartTimeHour);
  const sm = transNumber(planStartTimeMinute);
  const eh = transNumber(planEndTimeHour);
  const em = transNumber(planEndTimeMinute);
  const planStartTime = `${year}-${m}-${d}T${sh}:${sm}:00`;
  const planEndTime = `${year}-${m}-${d}T${eh}:${em}:00`;



  try {
    const response = await axios.post(apiUrl, {
      category: cate[category],
      title: title,
      isImportant: "True",
      planStartTime: planStartTime,
      planEndTime: planEndTime,
      content: content,
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
