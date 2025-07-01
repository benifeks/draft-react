import React, { useState } from "react";

import { TableContext } from "./TableContext";

const TableProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // для модалки
  const [checkedUsers, setCheckedUsers] = useState([]); // для чекбоксов

  return (
    <TableContext.Provider
      value={{
        allUsers,
        setAllUsers,
        selectedUser,
        setSelectedUser,
        checkedUsers,
        setCheckedUsers,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
