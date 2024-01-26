import axios from "axios";

export async function deletePlan(id: number) {
  let accessToken: string | null = "";
  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("token");
  }
  const apiUrl = `https://gittgi.site/plan/${id}`;

  try {
    const response = await axios.delete(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      console.log("삭제 성공!");
      return true;
    } else {
      console.error("삭제에 실패했습니다.");
      return false;
    }
  } catch (error) {
    console.error("네트워크 오류:", error);
    return false;
  }
}
