import React from "react";

import CurrencyCalculator from "./CurrencyCalculator/CurrencyCalculator";
import styles from "./Exercises.module.scss";
import GuessNumber from "./GuessNumber/GuessNumber";
import SpiralMatrix from "./SpiralMatrix/SpiralMatrix";

const Exercises = () => {
  return (
    <section className={styles.exercises}>
      <h2>Задачи и упражнения</h2>
      <div className={styles.exercises__container}>
        <GuessNumber />
        <SpiralMatrix />
        <CurrencyCalculator />
      </div>
    </section>
  );
};

export default Exercises;
