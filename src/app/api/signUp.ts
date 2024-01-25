export async function doSignUp(
  username: string,
  password: string,
  nickname: string
) {
  const apiUrl = "http://15.165.216.177:8080/join";
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("nickname", nickname);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (response.ok) {
      // 성공적으로 처리된 경우의 로직
      console.log("가입이 완료되었습니다.");
    } else {
      // 오류가 발생한 경우의 로직
      console.error("가입에 실패했습니다.", response);
    }
  } catch (error) {
    console.error("네트워크 오류:", error);
  }
};
