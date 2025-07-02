import React from "react";

import CheckedUsersList from "./components/CheckedUsersList/CheckedUsersList";
import ClearUsersButton from "./components/ClearUsersButton/ClearUsersButton";
import LoadUsersButton from "./components/LoadUsersButton/LoadUsersButton";
import UserDetailsCard from "./components/UserDetailsCard/UserDetailsCard";
import UsersTable from "./components/UsersTable/UsersTable";
import TableProvider from "./context/TableProvider";
import styles from "./Table.module.scss";

const Table = () => {
  return (
    <section className={styles.table}>
      <h2 className={styles.title}>Таблица пользователей</h2>
      <TableProvider>
        <ul className={styles.blocksList}>
          <li className={`${styles.blockItem} ${styles.blockButtons}`}>
            <LoadUsersButton />
            <ClearUsersButton />
          </li>
          <li className={styles.blockItem}>
            <UsersTable />
          </li>
          <li className={styles.blockItem}>
            <CheckedUsersList />
          </li>
        </ul>
        <UserDetailsCard />
      </TableProvider>
    </section>
  );
};

export default Table;
