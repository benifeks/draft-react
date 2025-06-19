import React from "react";

import styles from "./CardExercises.module.scss";

const CardExercises = ({ title, children }) => {
  return (
    <article className={styles.card}>
      {title && <h3 className={styles.card__title}>{title}</h3>}
      <div className={styles.card__content}>{children}</div>
    </article>
  );
};

export default CardExercises;
