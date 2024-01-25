export async function doSignIn(username: string, password: string) {
  const apiUrl = "http://15.165.216.177:8080/login"; // 실제 서버 주소로 변경
  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (response.ok) {
      const data = await response.json();
      // 서버에서 받은 데이터를 활용하여 로직을 추가할 수 있습니다.
      console.log("로그인 성공!", data);

      // 여기에서 다른 화면으로 이동하거나 필요한 작업을 수행합니다.
    } else {
      console.error("로그인에 실패했습니다.");
    }
  } catch (error) {
    console.error("네트워크 오류:", error);
  }
}
