// Импортируем модули для работы с путями и файловой системой
import path from "path";
import { promises as fs } from "fs";

// Основной обработчик запроса
export default async function handler(req, res) {
  const { name, id } = req.query; // Получаем имя файла и id из query-параметров

  // Разрешаем только DELETE-запросы
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Метод не поддерживается" });
  }

  // Безопасность: проверяем, что имя файла состоит только из допустимых символов
  if (!/^[\w-]+$/.test(name)) {
    return res.status(400).json({ error: "Недопустимое имя файла" });
  }

  try {
    // Формируем путь до файла, из которого нужно удалить элемент
    const filePath = path.join(process.cwd(), "dataJson", `${name}.json`);

    // Читаем содержимое файла
    const fileContent = await fs.readFile(filePath, "utf8");

    // Преобразуем JSON-строку в массив объектов
    const data = JSON.parse(fileContent);

    // Фильтруем массив, исключая элемент с нужным id
    const filteredData = data.filter((item) => item.id.toString() !== id);

    // Если длина массива не изменилась — значит элемент не найден
    if (filteredData.length === data.length) {
      return res.status(404).json({ error: "Элемент не найден" });
    }

    // Перезаписываем файл обновлённым массивом
    await fs.writeFile(filePath, JSON.stringify(filteredData, null, 2), "utf8");

    // Отправляем успешный ответ
    res.status(200).json({ message: "Элемент успешно удалён" });
  } catch (err) {
    // Ловим и логируем ошибку, отправляем ответ с кодом 500
    console.error("Ошибка удаления:", err);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
}
