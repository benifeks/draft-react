import React from "react";

import styles from "./CardBackStack.module.scss";

const CardBackStack = ({ count = 5 }) => {
  const cards = Array.from({ length: count });

  return (
    <div className={styles.stack}>
      {cards.map((_, i) => (
        <img
          key={i}
          src="https://deckofcardsapi.com/static/img/back.png"
          alt="Card back"
          className={styles.stackCard}
          style={{
            top: `${i * 0.2}px`,
            left: `${i * 0.2}px`,
            rotate: `${i * 5}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default CardBackStack;
