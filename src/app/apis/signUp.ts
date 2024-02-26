import axios from 'axios';

export async function doSignUp(
  username: string,
  password: string,
  nickname: string
) {
  const apiUrl = "/join";
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("nickname", nickname);

  try {
    const response = await axios.post(apiUrl, formData.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.status === 200) {
      // 성공적으로 처리된 경우의 로직
      return true;
    } else {
      // 오류가 발생한 경우의 로직
      return false;
    }
  } catch (error) {
    console.error("네트워크 오류:", error);
    throw error; // 에러를 다시 throw하여 호출자에게 알림
  }
}
