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

  const apiUrl = "https://gittgi.site/plan";

  const transNumber = (num: number) => {
    return num.toString().length === 1 ? "0" + num.toString() : num.toString();
  };
  const m = transNumber(month);
  const d = transNumber(day);
  const sh = transNumber(planStartTimeHour);
  const sm = transNumber(planStartTimeMinute);
  const eh = transNumber(planEndTimeHour);
  const em = transNumber(planEndTimeMinute);
  const planStartTime = `${year}-${m}-${d}T${sh}:${sm}:00`;
  const planEndTime = `${year}-${m}-${d}T${eh}:${em}:00`;

  console.log(title, content, cate[category], planStartTime, planEndTime);

  // const formData = new URLSearchParams();
  // formData.append("title", title);
  // formData.append("content", content);
  // formData.append("category", cate[category]);
  // formData.append("isImportant", "True");
  // formData.append("planStartTime", planStartTime);
  // formData.append("planEndTime", planEndTime);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: cate[category],
        title: title,
        isImportant: "True",
        planStartTime: planStartTime,
        planEndTime: planEndTime,
        content: content,
    }),
    });

    if (response.ok) {
      console.log("추가 성공!");
      return true;
    } else {
      console.error("추가에 실패했습니다.");
      return false;
    }
  } catch (error) {
    console.error("네트워크 오류:", error);
    return false;
  }
}
