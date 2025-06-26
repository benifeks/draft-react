// "blackjack-проект" памятка для gpt
import React, { useEffect, useState } from "react";

import CardBackStack from "./components/CardBackStack/CardBackStack";
import DealerHand from "./components/DealerHand/DealerHand";
import DrawCardButton from "./components/DrawCardButton/DrawCardButton";
import PassButton from "./components/PassButton/PassButton";
import PlayerHand from "./components/PlayerHand/PlayerHand";
import StartGameButton from "./components/StartGameButton/StartGameButton";
import { displaySetters } from "./constants";
import { checkInitialGameResult } from "./utils/checkInitialGameResult";
import { drawCards, getNewDeck } from "./utils/deckApi";
import { calculateScore } from "./utils/scoring";
import { updateDisplayState } from "./utils/updateDisplayState";

const Blackjack = () => {
  // Управление доступностью кнопок
  const [isStartDisabled, setIsStartDisabled] = useState(false);
  const [isDrawDisabled, setIsDrawDisabled] = useState(true);
  const [isPassDisabled, setIsPassDisabled] = useState(true);

  // Карты и колода
  const [deckId, setDeckId] = useState(null);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

  // Эти состояния только для отображения, обновляются через displaySetters
  const [playerScore, setPlayerScore] = useState("");
  const [dealerScore, setDealerScore] = useState("");
  const [gameResult, setGameResult] = useState("");

  // Флаги
  const [isInitialResultSet, setIsInitialResultSet] = useState(false);
  const [isDealerRevealed, setIsDealerRevealed] = useState(false); // первая карта дилера открыта?

  // Инициализируем displaySetters только один раз
  useEffect(() => {
    displaySetters.setPlayerScore = setPlayerScore;
    displaySetters.setDealerScore = setDealerScore;
    displaySetters.setGameResult = setGameResult;
  }, []);

  // Обработка старта новой игры
  const handleStartGame = async () => {
    setIsDealerRevealed(false);
    updateDisplayState({
      playerScore: "",
      dealerScore: "",
      result: "",
    });

    const newDeck = await getNewDeck();
    setDeckId(newDeck.deck_id);

    const initialCards = await drawCards(newDeck.deck_id, 4);
    const player = initialCards.slice(0, 2);
    const dealer = initialCards.slice(2, 4);

    setPlayerCards(player);
    setDealerCards(dealer);

    const pScore = calculateScore(player);
    const dScore = calculateScore(dealer);
    const isGameOver = checkInitialGameResult(pScore, dScore);

    if (!isGameOver) {
      setIsInitialResultSet(true);
    }

    setIsStartDisabled(!isGameOver); // ← теперь корректно: если игра не окончена, дизейблим кнопку
    setIsDrawDisabled(isGameOver);
    setIsPassDisabled(isGameOver);
  };

  // Проверяем начальный результат — ставим один раз
  useEffect(() => {
    if (
      playerCards.length === 2 &&
      dealerCards.length === 2 &&
      !isInitialResultSet
    ) {
      const pScore = calculateScore(playerCards);
      const dScore = calculateScore(dealerCards);
      checkInitialGameResult(pScore, dScore);
      setIsInitialResultSet(true);
    }
  }, [playerCards, dealerCards, isInitialResultSet]);

  // При изменении карт после стартовой фазы — обновляем через updateDisplayState
  useEffect(() => {
    if (playerCards.length > 2 && isInitialResultSet) {
      const pScore = calculateScore(playerCards);
      const dScore = calculateScore(dealerCards);

      updateDisplayState({
        playerScore: pScore,
        dealerScore: isDealerRevealed || dealerCards.length > 2 ? dScore : "🙂",
        result: gameResult,
      });
    }
  }, [
    playerCards,
    dealerCards,
    isInitialResultSet,
    gameResult,
    isDealerRevealed,
  ]);

  // Игрок добирает карту
  const handleDrawCard = async () => {
    if (!deckId) return;

    const newCardPlayer = await drawCards(deckId, 1);
    if (!newCardPlayer) return;

    const updatedPlayerCards = [...playerCards, ...newCardPlayer];
    setPlayerCards(updatedPlayerCards);

    const playerScore = calculateScore(updatedPlayerCards);

    // Проверка после добора
    if (playerScore > 21) {
      updateDisplayState({
        playerScore,
        dealerScore: calculateScore(dealerCards),
        result: "Перебор! Игрок проиграл",
      });

      setIsStartDisabled(false);
      setIsDrawDisabled(true);
      setIsPassDisabled(true);
      return;
    }

    if (playerScore === 21) {
      updateDisplayState({
        playerScore,
        dealerScore: "🙂",
        result: "21 очко! Отличная рука.",
      });

      setIsDrawDisabled(true); // нельзя больше брать
      return;
    }

    updateDisplayState({
      playerScore,
      dealerScore: "🙂",
      result: "Игрок добирает",
    });
  };

  // Ход дилера — добирает по правилам
  const handleDealerTurn = async () => {
    if (!deckId) return;

    let updatedDealerCards = [...dealerCards];
    let dealerScore = calculateScore(updatedDealerCards);

    while (dealerScore < 17) {
      const newCard = await drawCards(deckId, 1);
      if (!newCard) break;

      updatedDealerCards = [...updatedDealerCards, ...newCard];
      dealerScore = calculateScore(updatedDealerCards);
    }

    setDealerCards(updatedDealerCards);

    const playerScore = calculateScore(playerCards);

    let result = "";
    if (dealerScore > 21) {
      result = "Дилер перебор! Игрок выиграл 🎉";
    } else if (dealerScore > playerScore) {
      result = "Дилер выиграл!";
    } else if (dealerScore < playerScore) {
      result = "Игрок выиграл!";
    } else {
      result = "Ничья!";
    }

    updateDisplayState({
      playerScore,
      dealerScore,
      result,
    });

    setIsStartDisabled(false);
  };

  // Игрок нажимает "Пас"
  const handlePass = () => {
    setIsDealerRevealed(true); // открываем скрытую карту

    updateDisplayState({
      playerScore: calculateScore(playerCards),
      dealerScore: calculateScore(dealerCards),
      result: "Игрок пасует",
    });

    setIsStartDisabled(false);
    setIsDrawDisabled(true);
    setIsPassDisabled(true);

    handleDealerTurn();
  };

  return (
    <section>
      <h2>Blackjack</h2>

      <StartGameButton onStart={handleStartGame} disabled={isStartDisabled} />
      <DrawCardButton onDraw={handleDrawCard} disabled={isDrawDisabled} />
      <PassButton onClick={handlePass} disabled={isPassDisabled} />

      <PlayerHand cards={playerCards} />
      <span>{playerScore}</span>
      <span>{gameResult}</span>
      <span>{dealerScore}</span>
      <DealerHand cards={dealerCards} revealed={isDealerRevealed} />

      <CardBackStack
        count={deckId ? 52 - (playerCards.length + dealerCards.length) : 52}
      />
    </section>
  );
};

export default Blackjack;
