import React, { useContext } from "react";

import { TableContext } from "../../context/TableContext";

const UserSelectCheckbox = ({
  user,
  emojiChecked = "✅",
  emojiUnchecked = "",
}) => {
  const { checkedUsers, setCheckedUsers } = useContext(TableContext);

  const isChecked = checkedUsers.some((u) => u.login.uuid === user.login.uuid);

  const toggle = () => {
    if (isChecked) {
      setCheckedUsers((prev) =>
        prev.filter((u) => u.login.uuid !== user.login.uuid)
      );
    } else {
      setCheckedUsers((prev) => [...prev, user]);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      style={{
        fontSize: "18px",
        border: "1px solid #aaa",
        borderRadius: "4px",
        width: "24px",
        height: "24px",
        cursor: "pointer",
        background: "#fff",
        padding: 0,
      }}
      title={isChecked ? "Снять выбор" : "Выбрать пользователя"}
    >
      {isChecked ? emojiChecked : emojiUnchecked}
    </button>
  );
};

export default UserSelectCheckbox;
