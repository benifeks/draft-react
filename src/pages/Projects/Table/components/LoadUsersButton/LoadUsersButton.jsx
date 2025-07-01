// src/pages/Projects/Table/components/LoadUsersButton.jsx
import React, { useContext } from "react";

import { TableContext } from "../../context/TableContext";
import { useLoadUsers } from "../../hooks/useLoadUsers";
import styles from "./LoadUsersButton.module.scss";

const LoadUsersButton = ({ countUsers = 1 }) => {
  const { allUsers, setAllUsers } = useContext(TableContext);
  const { loadUsers } = useLoadUsers();

  const handleClick = async () => {
    const newUsers = await loadUsers(countUsers);

    setAllUsers([...allUsers, ...newUsers]);
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      Добавить пользователя
    </button>
  );
};

export default LoadUsersButton;
