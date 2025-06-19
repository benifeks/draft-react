import React from "react";

import styles from "./Exercises.module.scss";
import SpiralMatrix from "./SpiralMatrix/SpiralMatrix";

const Exercises = () => {
  return (
    <section className={styles.exercises}>
      <h2>Задачи и упражнения</h2>
      <div className={styles.exercises__container}>
        <SpiralMatrix />
      </div>
    </section>
  );
};

export default Exercises;
