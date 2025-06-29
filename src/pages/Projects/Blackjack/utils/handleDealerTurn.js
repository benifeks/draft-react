// Blackjack/utils/handleDealerTurn.js

import { drawCards } from "./deckApi";
import { calculateScore } from "./scoring";
import { updateDisplayState } from "./updateDisplayState";

/**
 * Обрабатывает ход дилера: добирает карты по правилам и определяет результат игры.
 *
 * @param {string} deckId — ID текущей колоды
 * @param {Array} dealerCards — Текущие карты дилера
 * @param {Array} playerCards — Текущие карты игрока
 * @param {Function} setDealerCards — Сеттер для dealerCards (триггерит отображение)
 * @param {Function} setGameResult — Сеттер для gameResult (сохраняет итог)
 */
export const handleDealerTurn = async ({
  deckId,
  dealerCards,
  playerCards,
  setDealerCards,
  setGameResult,
}) => {
  if (!deckId) return; // Без колоды — нет игры

  let updatedDealerCards = [...dealerCards];
  let dealerScore = calculateScore(updatedDealerCards);

  // 🔁 Дилер добирает карты пока не наберёт хотя бы 17 очков
  while (dealerScore < 17) {
    const newCard = await drawCards(deckId, 1);
    if (!newCard) break;

    updatedDealerCards = [...updatedDealerCards, ...newCard];
    setDealerCards(updatedDealerCards); // обновляем состояние (=> перерендер)
    dealerScore = calculateScore(updatedDealerCards); // пересчёт очков
  }

  const playerScore = calculateScore(playerCards);

  // 🧠 Определяем финальный результат
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

  // 📊 Обновляем отображение очков и результата
  updateDisplayState({
    playerScore,
    dealerScore,
    result,
  });

  // 💾 Сохраняем результат в состояние
  setGameResult(result);
};
