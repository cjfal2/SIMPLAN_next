export async function doSignIn(username: string, password: string) {
  const apiUrl = "/login";
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
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
