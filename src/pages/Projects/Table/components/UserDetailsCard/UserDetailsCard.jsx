// src/pages/Projects/Table/components/UserDetailsCard/UserDetailsCard.jsx
import React, { useContext } from "react";

import { TableContext } from "../../context/TableContext";
import styles from "./UserDetailsCard.module.scss";

const UserDetailsCard = () => {
  const { selectedUser, setSelectedUser } = useContext(TableContext);

  // Не показываем карточку, если пользователь не выбран
  if (!selectedUser) return null;

  const { picture, name, email, phone, location, dob, gender } = selectedUser;

  const fullName = `${name.title} ${name.first} ${name.last}`;

  return (
    <div className={styles.overlay} onClick={() => setSelectedUser(null)}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={() => setSelectedUser(null)}>
          ❌
        </button>
        <img className={styles.avatar} src={picture.large} alt={fullName} />
        <h2>{fullName}</h2>
        <p>
          <strong>Пол:</strong> {gender}
        </p>
        <p>
          <strong>Возраст:</strong> {dob.age}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Телефон:</strong> {phone}
        </p>
        <p>
          <strong>Страна:</strong> {location.country}
        </p>
      </div>
    </div>
  );
};

export default UserDetailsCard;
