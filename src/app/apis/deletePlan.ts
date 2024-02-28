import axios from "axios";

export async function deletePlan(id: number) {
  let accessToken: string | null = "";
  if (typeof window !== "undefined") {
    accessToken = localStorage.getItem("token");
  }
  const apiUrl = `/plan/${id}`;

  try {
    const response = await axios.delete(apiUrl, {
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
