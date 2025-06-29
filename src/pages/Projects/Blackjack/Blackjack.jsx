import React from "react";

import BlackjackCore from "./BlackjackCore";
import GameProvider from "./context/GameProvider";
import styles from "./styles/Blackjack.module.scss";

const Blackjack = () => {
  return (
    <section className={styles.blackjack}>
      <GameProvider>
        <BlackjackCore />
        {/* выделим логику и отображение внутрь отдельного компонента */}
      </GameProvider>
    </section>
  );
};

export default Blackjack;
