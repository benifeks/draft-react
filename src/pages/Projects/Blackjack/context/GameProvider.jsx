// Blackjack/context/GameProvider.jsx
import React, { useState } from "react";

import { GameContext } from "./GameContext";

// ✅ Оборачиваем всё состояние игры в один провайдер
const GameProvider = ({ children }) => {
  // 🔢 Состояния для управления кнопками
  const [isStartDisabled, setIsStartDisabled] = useState(false);
  const [isDrawDisabled, setIsDrawDisabled] = useState(true);
  const [isPassDisabled, setIsPassDisabled] = useState(true);

  // 🃏 Карты и колода
  const [deckId, setDeckId] = useState(null);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

  // 📊 Отображаемые значения
  const [playerScore, setPlayerScore] = useState("");
  const [dealerScore, setDealerScore] = useState("");
  const [gameResult, setGameResult] = useState("");

  // ⚙️ Флаги состояния игры
  const [isInitialResultSet, setIsInitialResultSet] = useState(false);
  const [isDealerRevealed, setIsDealerRevealed] = useState(false);

  // 📦 Всё, что нужно передаём в value контекста
  return (
    <GameContext.Provider
      value={{
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
