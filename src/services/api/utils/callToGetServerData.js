export async function callToGetServerData(name) {
  try {
    const res = await fetch(`/api/getServerData?name=${name}`);
    if (!res.ok) throw new Error("Ошибка запроса");
    return await res.json();
  } catch (error) {
    console.error("Ошибка callToGetServerData:", error);
    throw error;
  }
}
