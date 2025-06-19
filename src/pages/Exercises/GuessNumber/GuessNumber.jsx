import React from "react";

import CardExercises from "../ui/CardExercises/CardExercises";
import GuessInput from "./components/GuessInput";
import styles from "./GuessNumber.module.scss";

const GuessNumber = () => {
  return (
    <CardExercises title="Угадай число" className={styles.GuessNumber}>
      <GuessInput />
    </CardExercises>
  );
};

export default GuessNumber;
