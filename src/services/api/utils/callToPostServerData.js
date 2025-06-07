export async function callToPostServerData(name, data) {
  try {
    // Формируем запрос к API: POST /api/postServerData?name=...
    const res = await fetch(`/api/postServerData?name=${name}`, {
      method: "POST", // Метод POST — отправляем данные
      headers: {
        "Content-Type": "application/json", // Указываем, что тело — JSON
      },
      body: JSON.stringify(data), // Преобразуем объект data в JSON-строку для передачи
    });

    // Если ответ сервера не ок (код не 2xx), обрабатываем ошибку
    if (!res.ok) {
      // Пытаемся прочитать тело ответа с ошибкой
      const error = await res.json();
      // Выбрасываем ошибку с текстом из сервера или с кодом статуса
      throw new Error(error.error || `Ошибка: ${res.status}`);
    }

    // Если всё хорошо — парсим JSON из ответа и возвращаем
    return await res.json();
  } catch (error) {
    // Логируем ошибку для отладки
    console.error("Ошибка callToPostServerData:", error.message);
    // Пробрасываем ошибку дальше, чтобы её можно было обработать в вызывающем коде
    throw error;
  }
}
