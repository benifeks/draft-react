// src/pages/Projects/Table/components/CheckedUsersList/CheckedUsersList.jsx
import React, { useContext } from "react";

import { TableContext } from "../../context/TableContext";
import CheckedUsersSwiper from "../CheckedUsersSwiper/CheckedUsersSwiper";
import ClearCheckedUsersButton from "../ClearCheckedUsersButton/ClearCheckedUsersButton";
import styles from "./CheckedUsersList.module.scss";

const CheckedUsersList = () => {
  const { checkedUsers } = useContext(TableContext);

  if (!checkedUsers || checkedUsers.length === 0) {
    return <p className={styles.empty}>Пользователи не выбраны.</p>;
  }

  return (
    <div className={styles.listWrapper}>
      <ClearCheckedUsersButton />
      <h3>Выбранные пользователи:</h3>
      <CheckedUsersSwiper />
    </div>
  );
};

export default CheckedUsersList;
