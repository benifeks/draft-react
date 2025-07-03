// src/pages/Projects/QuickNotes/utils/formatDate.js

/**
 * Форматирует дату в строку "дд.мм.гг (чч:мм)"
 * @param {Date | string | number} dateInput — объект Date или дата в формате строки/числа
 * @returns {string} Отформатированная дата
 */
export default function formatDate(dateInput) {
  const date = new Date(dateInput);

  if (isNaN(date)) {
    return ""; // Если дата невалидна, возвращаем пустую строку
  }

  const pad = (num) => String(num).padStart(2, "0");

  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = String(date.getFullYear()).slice(-2);
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${day}.${month}.${year} (${hours}:${minutes})`;
}
