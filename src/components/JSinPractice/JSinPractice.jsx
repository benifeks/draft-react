import React from "react";

import styles from "./JSinPractice.module.scss";
import MiniProjects from "./MiniProjects";
import Tasks from "./Tasks";

const JSinPractice = () => {
  return (
    <section className={styles.jsInPractice} id="js-in-practice">
      <h2>
        JavaScript
        <br /> на практике
      </h2>
      <h3>📝 Задачи и мини-проекты 📂</h3>
      <div className={styles.jsInPractice__container}>
        <article className={styles.article}>
          <Tasks />
        </article>
        <article className={styles.article}>
          <MiniProjects />
        </article>
      </div>
    </section>
  );
};

export default JSinPractice;
