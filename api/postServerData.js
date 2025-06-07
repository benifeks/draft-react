import path from "path";
import { promises as fs } from "fs";

// Основной обработчик запроса
export default async function handler(req, res) {
  const { name } = req.query; // Извлекаем параметр ?name=имяФайла из URL

  // Разрешаем только POST-запросы
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Метод не поддерживается" });
  }

  // Простейшая защита имени файла: только буквы, цифры, _ и -
  if (!/^[\w-]+$/.test(name)) {
    return res.status(400).json({ error: "Недопустимое имя файла" });
  }

  try {
    // Строим путь к файлу: /dataJson/имя.json
    const filePath = path.join(process.cwd(), "dataJson", `${name}.json`);

    let existing = []; // Массив с текущими данными
    try {
      // Пробуем прочитать файл (если он есть)
      const fileContent = await fs.readFile(filePath, "utf8");
      existing = JSON.parse(fileContent); // Парсим содержимое
    } catch (err) {
      // Если файл не найден — нормально, просто создадим новый
      if (err.code !== "ENOENT") throw err;
    }

    const newItem = req.body; // Получаем отправленные данные из тела запроса

    // Проверка: тело должно быть объектом
    if (!newItem || typeof newItem !== "object") {
      return res.status(400).json({ error: "Неверные данные" });
    }

    // Добавляем новые данные в конец массива
    existing.push(newItem);

    // Сериализуем обратно в JSON с отступами
    const newData = JSON.stringify(existing, null, 2);

    // Перезаписываем файл новым содержимым
    await fs.writeFile(filePath, newData, "utf8");

    // Отправляем успешный ответ
    res.status(200).json({ message: "Данные успешно сохранены" });
  } catch (err) {
    // Ошибка сервера (например, нет прав, сломан JSON и т.д.)
    console.error(err);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
}
