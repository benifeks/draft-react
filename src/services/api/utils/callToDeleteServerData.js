// Отправка DELETE-запроса к API для удаления элемента по id из указанного json-файла
export async function callToDeleteServerData(name, id) {
  try {
    // Формируем URL с query-параметрами: name — имя файла, id — идентификатор удаляемого элемента
    const res = await fetch(`/api/deleteServerData?name=${name}&id=${id}`, {
      method: "DELETE", // Указываем метод запроса
    });

    // Если сервер вернул ошибку (не 2xx), пытаемся извлечь сообщение ошибки
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || `Ошибка: ${res.status}`);
    }

    // Если всё прошло успешно, возвращаем JSON-ответ от сервера
    return await res.json();
  } catch (error) {
    // Логируем ошибку и пробрасываем дальше
    console.error("Ошибка callToDeleteServerData:", error.message);
    throw error;
  }
}
