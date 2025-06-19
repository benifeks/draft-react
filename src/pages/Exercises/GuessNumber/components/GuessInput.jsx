import React, { useState } from "react";

import {
  generateSecretNumber,
  handleGuess,
  resetGame,
} from "../guessNumber.utils";
import styles from "./GuessInput.module.scss";

const GuessInput = () => {
  const [guess, setGuess] = useState("");
  const [secretNumber, setSecretNumber] = useState(generateSecretNumber());
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    handleGuess(guess, secretNumber, attemptsLeft, setAttemptsLeft, setResult);
    setGuess(""); // очистка поля
  };

  const handleReset = () => {
    resetGame(setGuess, setResult, setSecretNumber, setAttemptsLeft);
  };

  return (
    <div className={styles.GuessInput}>
      <h3>🎯 Угадай число от 1 до 100</h3>
      <p>Попыток осталось: {attemptsLeft}</p>
      <input
        className={styles.GuessInput__input}
        type="number"
        min="1"
        max="100"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Введите число"
      />

      <div className={styles.GuessInput__buttons}>
        <button onClick={handleSubmit}>▶️ Угадать</button>
        <button onClick={handleReset}>🆑 Сброс</button>
      </div>
      {result && <p>{result}</p>}
    </div>
  );
};

export default GuessInput;
