import React from "react";

import styles from "./PassButton.module.scss";

const PassButton = ({ onClick, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      Пас
    </button>
  );
};

export default PassButton;
