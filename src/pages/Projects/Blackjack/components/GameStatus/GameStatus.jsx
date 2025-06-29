// Blackjack/components/GameStatus/GameStatus.jsx
import React from "react";

import styles from "./GameStatus.module.scss";

const GameStatus = ({ playerScore, dealerScore, gameResult }) => {
  return (
    <ul className={styles.status}>
      <li className={styles.score}>
        <span className={styles.label}>Игрок :</span>
        <span className={styles.value}>{playerScore}</span>
      </li>
      <li className={styles.result}>{gameResult}</li>
      <li className={styles.score}>
        <span className={styles.label}>Дилер :</span>
        <span className={styles.value}>{dealerScore}</span>
      </li>
    </ul>
  );
};

export default GameStatus;
