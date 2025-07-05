import React from "react";

import useScrollToHash from "../../../hooks/useScrollToHash";
import BlackjackCore from "./BlackjackCore";
import GameProvider from "./context/GameProvider";
import styles from "./styles/Blackjack.module.scss";

const Blackjack = () => {
  useScrollToHash();
  return (
    <section className={styles.blackjack} id="blackjack">
      <GameProvider>
        <BlackjackCore />
        {/* выделим логику и отображение внутрь отдельного компонента */}
      </GameProvider>
    </section>
  );
};

export default Blackjack;
