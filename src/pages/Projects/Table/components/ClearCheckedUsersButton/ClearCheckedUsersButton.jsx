// src/pages/Projects/Table/components/ClearCheckedUsersButton/ClearCheckedUsersButton.jsx
import React, { useContext } from "react";

import { TableContext } from "../../context/TableContext";
import styles from "./ClearCheckedUsersButton.module.scss";

const ClearCheckedUsersButton = () => {
  const { checkedUsers, setCheckedUsers } = useContext(TableContext);

  if (!checkedUsers || checkedUsers.length === 0) return null;

  const handleClear = () => {
    setCheckedUsers([]);
  };

  return (
    <button className={styles.button} onClick={handleClear}>
      Очистить
      <br />
      выбранных
    </button>
  );
};

export default ClearCheckedUsersButton;
