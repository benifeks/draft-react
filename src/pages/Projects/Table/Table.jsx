import React from "react";

import LoadUsersButton from "./components/LoadUsersButton/LoadUsersButton";
import styles from "./Table.module.scss";

const Table = () => {
  return (
    <section className={styles.table}>
      <h2>Table</h2>
      <LoadUsersButton countUsers={3} />
    </section>
  );
};

export default Table;
