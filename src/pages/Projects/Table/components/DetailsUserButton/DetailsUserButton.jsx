// src/pages/Projects/Table/components/DetailsUserButton/DetailsUserButton.jsx
import React, { useContext } from "react";

import { TableContext } from "../../context/TableContext";
import findUserById from "../../utils/findUserById";
import styles from "./DetailsUserButton.module.scss";

/**
 * Кнопка "Подробнее", устанавливает выбранного пользователя в контекст
 * @param {string} uuid - UUID пользователя
 * @param {Array} sourceArray - Массив, по которому ищем пользователя
 */
const DetailsUserButton = ({ uuid, sourceArray }) => {
  const { setSelectedUser } = useContext(TableContext);

  const handleClick = () => {
    const foundUser = findUserById(sourceArray, uuid);
    if (foundUser) {
      setSelectedUser(foundUser);
    } else {
      console.warn(`Пользователь с uuid ${uuid} не найден`);
    }
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      📄
    </button>
  );
};

export default DetailsUserButton;
