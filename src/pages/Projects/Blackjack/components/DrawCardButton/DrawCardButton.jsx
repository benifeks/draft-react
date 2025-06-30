import React from "react";
import { useContext } from "react";

import { GameContext } from "../../context/GameContext";
import CardBackStack from "../CardBackStack/CardBackStack";
import styles from "./DrawCardButton.module.scss";

const DrawCardButton = ({ onDraw, disabled }) => {
  const { deckId, playerCards, dealerCards } = useContext(GameContext);

  return (
    <article className={styles.drawCardButton}>
      <h3 className={styles.title}>Взять карту</h3>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onDraw} disabled={disabled}>
          <CardBackStack
            count={deckId ? 52 - (playerCards.length + dealerCards.length) : 52}
          />
        </button>
      </div>
      <p className={styles.description}>Кликните, чтобы взять карту</p>
    </article>
  );
};

export default DrawCardButton;
