import React from "react";

import styles from "./Exercises.module.scss";

const Exercises = () => {
  return (
    <div className={styles.exercises}>
      <h2>Задачи и упражнения</h2>
      <div className={styles.exercisesContainer}></div>
    </div>
  );
};

export default Exercises;
