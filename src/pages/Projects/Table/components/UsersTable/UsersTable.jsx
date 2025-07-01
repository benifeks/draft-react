// src/pages/Projects/Table/components/UsersTable/UsersTable.jsx
import React, { useContext } from "react";

import { TableContext } from "../../context/TableContext";
import DeleteUserButton from "../DeleteUserButton/DeleteUserButton";
import DetailsUserButton from "../DetailsUserButton/DetailsUserButton";
import UserSelectCheckbox from "../UserSelectCheckbox/UserSelectCheckbox";
import styles from "./UsersTable.module.scss";

const UsersTable = () => {
  const { allUsers, setAllUsers } = useContext(TableContext);

  if (!allUsers || allUsers.length === 0) {
    return <p className={styles.empty}>Пользователи не загружены.</p>;
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>✔️</th>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Инфо</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.login.uuid}>
              <td>
                <UserSelectCheckbox
                  user={user}
                  emojiChecked="✅"
                  emojiUnchecked="📁"
                />
              </td>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.dob.age}</td>
              <td>
                <DetailsUserButton
                  className={styles.detailsButton}
                  uuid={user.login.uuid}
                  sourceArray={allUsers}
                />
              </td>
              <td>
                <DeleteUserButton
                  uuid={user.login.uuid}
                  sourceArray={allUsers}
                  setSourceArray={setAllUsers}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
