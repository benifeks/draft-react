// src/pages/Projects/Table/components/ClearUsersButton/ClearUsersButton.jsx
import React, { useContext } from "react";

import { TableContext } from "../../context/TableContext";
import styles from "./ClearUsersButton.module.scss";

const ClearUsersButton = () => {
  const { setAllUsers } = useContext(TableContext);
  const { setCheckedUsers } = useContext(TableContext);

  const handleClear = () => {
    setAllUsers([]); // очищаем всех пользователей
    setCheckedUsers([]); // очищаем выбранных пользователей
  };

  return (
    <button type="button" className={styles.button} onClick={handleClear}>
      Очистить пользователей
    </button>
  );
};

export default ClearUsersButton;
