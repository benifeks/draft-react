import React from "react";
import { callToDeleteServerData } from "../../../../services/api/utils/callToDeleteServerData";

// Компонент-кнопка для удаления записи с сервера
const DeleteServerButton = ({ id, name, onDeleted, NameBtn, className }) => {
  // name — имя JSON-файла (без .json)
  // id — уникальный идентификатор записи
  // onDeleted — функция, вызываемая после успешного удаления (например, чтобы обновить список)

  const handleDelete = async () => {
    if (!window.confirm("Вы уверены, что хотите удалить эту запись?")) return;

    try {
      // Отправка DELETE-запроса к API
      const res = await callToDeleteServerData(name, id);

      console.log("Успешное удаление:", res.message);

      // Вызов внешней функции обратного вызова, если передана
      if (onDeleted) onDeleted(id);
    } catch (error) {
      console.error("Ошибка при удалении:", error.message);
    }
  };

  return (
    <button onClick={handleDelete} className={className}>
      {NameBtn || "Удалить"}
    </button>
  );
};

export default DeleteServerButton;
