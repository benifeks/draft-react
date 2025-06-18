import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const { name } = req.query;

  // Защита от недопустимых имён (только буквы, цифры, дефис, подчёркивание)
  if (!/^[\w-]+$/.test(name)) {
    return res.status(400).json({ error: "Недопустимое имя файла" });
  }

  try {
    //   создаём путь к файлу
    const filePath = path.join(process.cwd(), "dataJson", `${name}.json`);
    // получаем содержимое указанного в пути файла в формате utf8 после выполнения await
    const fileContents = await fs.readFile(filePath, "utf8");
    //распарсим полученное
    const data = JSON.parse(fileContents);
    // говорим что всё хорошо и отправляем данные
    res.status(200).json(data);
  } catch (error) {
    // говорим что ошибка и отправляем сообщение
    res.status(500).json({ error: "Файл не найден или повреждён" });
  }
}
