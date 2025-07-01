// src/pages/Projects/Table/components/DeleteUserButton/DeleteUserButton.jsx
import React, { useContext } from "react";

import { TableContext } from "../../context/TableContext";
import styles from "./DeleteUserButton.module.scss";

/**
 * Кнопка удаления пользователя из общего массива (и из выбранных, если отмечен).
 * @param {string} uuid — UUID пользователя
 */
const DeleteUserButton = ({ uuid }) => {
  const { allUsers, setAllUsers, checkedUsers, setCheckedUsers } =
    useContext(TableContext);

  const handleDelete = () => {
    // 1. Удаляем из checkedUsers, если есть
    const updatedChecked = checkedUsers.filter(
      (user) => user.login.uuid !== uuid
    );
    setCheckedUsers(updatedChecked);

    // 2. Удаляем из allUsers
    const updatedAll = allUsers.filter((user) => user.login.uuid !== uuid);
    setAllUsers(updatedAll);
  };

  return (
    <button className={styles.button} onClick={handleDelete}>
      ❌
    </button>
  );
};

export default DeleteUserButton;
