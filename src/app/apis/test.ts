import axios from "axios";


export async function test() {
  // const apiUrl = "/healthcheck";
  const apiUrl = "/healthcheck";
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // 받아온 데이터를 사용

    console.log(response.data, "여기");
  } catch (error) {
    // 오류 처리
    console.error("개인 정보 요청 중 오류 발생:", error);
  }
}