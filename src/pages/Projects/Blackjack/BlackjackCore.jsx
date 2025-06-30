import React, { useContext, useEffect } from "react";

import DealerHand from "./components/DealerHand/DealerHand";
import DrawCardButton from "./components/DrawCardButton/DrawCardButton";
import GameStatus from "./components/GameStatus/GameStatus";
import PassButton from "./components/PassButton/PassButton";
import PlayerHand from "./components/PlayerHand/PlayerHand";
import StartGameButton from "./components/StartGameButton/StartGameButton";
import { displaySetters } from "./constants";
import { GameContext } from "./context/GameContext";
import { useUpdateDisplay } from "./hooks/useUpdateDisplay";
import styles from "./styles/BlackjackCore.module.scss";
import { checkInitialGameResult } from "./utils/checkInitialGameResult";
import { handleDrawCard } from "./utils/handleDrawCard";
import { handlePass } from "./utils/handlePass";
import { calculateScore } from "./utils/scoring";
import { startNewGame } from "./utils/startNewGame";

const BlackjackCore = () => {
  // 🧠 Забираем состояния из контекста
  const {
    isStartDisabled,
    setIsStartDisabled,
    isDrawDisabled,
    setIsDrawDisabled,
    isPassDisabled,
    setIsPassDisabled,

    deckId,
    setDeckId,
    playerCards,
    setPlayerCards,
    dealerCards,
    setDealerCards,

    playerScore,
    setPlayerScore,
    dealerScore,
    setDealerScore,
    gameResult,
    setGameResult,

    isInitialResultSet,
    setIsInitialResultSet,
    isDealerRevealed,
    setIsDealerRevealed,
  } = useContext(GameContext);

  // 🔁 Обновление интерфейса при изменениях
  useUpdateDisplay({
    playerCards,
    dealerCards,
    isInitialResultSet,
    gameResult,
    isDealerRevealed,
  });

  // 🛠️ Инициализируем displaySetters один раз
  useEffect(() => {
    displaySetters.setPlayerScore = setPlayerScore;
    displaySetters.setDealerScore = setDealerScore;
    displaySetters.setGameResult = setGameResult;
  }, [setDealerScore, setGameResult, setPlayerScore]);

  const handleStartGame = () => {
    startNewGame({
      setDeckId,
      setPlayerCards,
      setDealerCards,
      setIsStartDisabled,
      setIsDrawDisabled,
      setIsPassDisabled,
      setIsInitialResultSet,
      setIsDealerRevealed,
    });
  };

  // 🧪 Проверяем начальный результат — один раз
  useEffect(() => {
    if (playerCards.length === 2 && dealerCards.length === 2) {
      const pScore = calculateScore(playerCards);
      const dScore = calculateScore(dealerCards);

      checkInitialGameResult(pScore, dScore);

      if (!isInitialResultSet) {
        setIsInitialResultSet(true);
      }

      if (dScore === 21) {
        setIsDealerRevealed(true);
      }
    }
  }, [
    playerCards,
    dealerCards,
    isInitialResultSet,
    setIsInitialResultSet,
    setIsDealerRevealed,
  ]);

  const onDrawCard = () => {
    handleDrawCard({
      deckId,
      playerCards,
      dealerCards,
      setPlayerCards,
      setIsStartDisabled,
      setIsDrawDisabled,
      setIsPassDisabled,
    });
  };

  const onPassClick = () => {
    handlePass({
      playerCards,
      dealerCards,
      deckId,
      setIsDealerRevealed,
      setIsStartDisabled,
      setIsDrawDisabled,
      setIsPassDisabled,
      setDealerCards,
      setGameResult,
    });
  };

  return (
    <section className={styles.blackjackCore}>
      <h2 className={styles.title}>Blackjack</h2>
      <ul className={styles.blackjackCoreList}>
        <li className={styles.gameStatus}>
          <GameStatus
            playerScore={playerScore}
            dealerScore={dealerScore}
            gameResult={gameResult}
          />
        </li>
        <li className={styles.hands}>
          <PlayerHand cards={playerCards} />
          <DealerHand cards={dealerCards} revealed={isDealerRevealed} />
        </li>
        <li className={styles.controls}>
          <StartGameButton
            onStart={handleStartGame}
            disabled={isStartDisabled}
          />
          <DrawCardButton onDraw={onDrawCard} disabled={isDrawDisabled} />
          <PassButton onClick={onPassClick} disabled={isPassDisabled} />
        </li>
      </ul>
    </section>
  );
};

export default BlackjackCore;
