import React from "react";

import styles from "./Homeprojects.module.scss";

const Homeprojects = () => {
  return (
    <section className={styles.homeprojects}>
      <h2 className={styles.title}>Добро пожаловать 👋</h2>
      <p className={styles.description}>
        Здесь представлены мини-проекты для практики и портфолио. Выбирайте из
        списка выше, чтобы посмотреть реализацию карточной игры Blackjack,
        таблицы пользователей или быстрых заметок.
      </p>
    </section>
  );
};

export default Homeprojects;
