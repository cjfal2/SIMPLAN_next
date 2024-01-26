export async function doSignIn(username: string, password: string) {
  const apiUrl = "https://gittgi.site/login";
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
      console.log("로그인 성공!", data);
      return data;
    } else {
      console.error("로그인에 실패했습니다.", response);
      return false;
    }
  } catch (error) {
    console.error("네트워크 오류:", error);
    return false;
  }
}
