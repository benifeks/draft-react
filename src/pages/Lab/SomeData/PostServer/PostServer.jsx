import React, { useState } from "react";
import { callToPostServerData } from "../../../../services/api/utils/callToPostServerData";
import "./PostServer.scss";

const PostServer = () => {
  // Хуки состояния для хранения введённых имени и email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // Статус отправки: null, либо { type: 'success' | 'error', message: string }
  const [status, setStatus] = useState(null);

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault(); // предотвращаем стандартное поведение формы (перезагрузку)

    // Формируем объект данных для отправки на сервер
    const dataToSend = {
      name,
      email,
      id: Date.now(), // Генерируем уникальный ID на клиенте (для примера)
    };

    try {
      // Вызываем асинхронную функцию отправки данных на сервер
      const res = await callToPostServerData("users", dataToSend);
      // Если успешно — меняем статус на успех и показываем сообщение из ответа сервера
      setStatus({ type: "success", message: res.message });
      // Очищаем поля формы
      setName("");
      setEmail("");
    } catch (error) {
      // Если произошла ошибка — показываем сообщение об ошибке
      setStatus({ type: "error", message: error.message || "Ошибка отправки" });
    }
  };

  return (
    <section className="post-server">
      <h3>PostServer</h3>

      {/* Пример данных, чтобы пользователь понимал что вводить */}
      <p>Имя Фамилия</p>
      <p>email@email.email</p>

      {/* Форма с двумя полями и кнопкой отправки */}
      <form onSubmit={handleSubmit} className="post-server__form">
        <input
          type="text"
          placeholder="Имя"
          value={name} // значение из состояния
          onChange={(e) => setName(e.target.value)} // обновляем состояние при вводе
          required // HTML-валидация — обязательно к заполнению
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Отправить</button>
      </form>

      {/* Отображаем статусный текст, если статус есть */}
      {status && (
        <p className={`post-server__status ${status.type}`}>{status.message}</p>
      )}
    </section>
  );
};

export default PostServer;
