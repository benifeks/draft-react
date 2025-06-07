// api/users.js
import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "dataJson", "users.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);

    res.status(200).json(data);
  } catch (error) {
    console.error("Ошибка чтения JSON:", error);
    res.status(500).json({ error: "Ошибка сервера при чтении данных" });
  }
}
