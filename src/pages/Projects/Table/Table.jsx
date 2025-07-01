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
      <h2>Таблица пользователей</h2>
      <TableProvider>
        <LoadUsersButton />
        <ClearUsersButton />
        <UsersTable />
        <UserDetailsCard />
        <CheckedUsersList />
      </TableProvider>
    </section>
  );
};

export default Table;
