import React from "react";

import styles from "./DealerHand.module.scss";

const DealerHand = ({ cards = [], revealed = false }) => {
  return (
    <div className={styles.hand}>
      {cards.map((card, i) =>
        i === 0 && !revealed ? (
          <img
            key={i}
            src="https://deckofcardsapi.com/static/img/back.png"
            alt="Card back"
            className={styles.handCard}
          />
        ) : (
          <img
            key={i}
            src={card.image}
            alt={card.code}
            className={styles.handCard}
          />
        )
      )}
    </div>
  );
};

export default DealerHand;
