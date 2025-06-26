import React from "react";

import styles from "./DrawCardButton.module.scss";

const DrawCardButton = ({ onDraw, disabled }) => {
  return (
    <button className={styles.button} onClick={onDraw} disabled={disabled}>
      Взять карту
    </button>
  );
};

export default DrawCardButton;
