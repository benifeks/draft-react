// src/pages/Projects/Table/components/LoadUsersButton.jsx
import React from "react";

import { useLoadUsers } from "../../hooks/useLoadUsers";
import styles from "./LoadUsersButton.module.scss";

const LoadUsersButton = ({ countUsers = 1 }) => {
  // Получаем из хука функцию загрузки пользователей
  const { loadUsers } = useLoadUsers();

  // Обработчик клика по кнопке
  const handleClick = async () => {
    // Вызываем функцию загрузки с нужным количеством пользователей
    const users = await loadUsers(countUsers);
    // Выводим загруженных пользователей в консоль
    console.log("Loaded users:", users);
  };

  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      Загрузить пользователей
    </button>
  );
};

export default LoadUsersButton;
