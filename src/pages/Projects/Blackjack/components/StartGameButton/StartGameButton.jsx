import React from "react";

import styles from "./StartGameButton.module.scss";

const StartGameButton = ({ onStart, disabled }) => {
  return (
    <button className={styles.button} onClick={onStart} disabled={disabled}>
      Начать игру
    </button>
  );
};

export default StartGameButton;
