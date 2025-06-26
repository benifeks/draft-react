import React from "react";

import styles from "./PlayerHand.module.scss";

const PlayerHand = ({ cards = [] }) => {
  return (
    <div className={styles.hand}>
      {cards.map((card) => (
        <img
          key={card.code}
          src={card.image}
          alt={card.code}
          className={styles.handCard}
        />
      ))}
    </div>
  );
};

export default PlayerHand;
