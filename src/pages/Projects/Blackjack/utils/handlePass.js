import { handleDealerTurn } from "./handleDealerTurn";
import { calculateScore } from "./scoring";
import { updateDisplayState } from "./updateDisplayState";

/**
 * Обрабатывает действие "Пас" игрока:
 * - Открывает карты дилера
 * - Обновляет отображение очков
 * - Запускает ход дилера
 *
 * @param {Array} playerCards
 * @param {Array} dealerCards
 * @param {string} deckId
 * @param {Function} setIsDealerRevealed
 * @param {Function} setIsStartDisabled
 * @param {Function} setIsDrawDisabled
 * @param {Function} setIsPassDisabled
 * @param {Function} setDealerCards
 * @param {Function} setGameResult
 */
export const handlePass = async ({
  playerCards,
  dealerCards,
  deckId,
  setIsDealerRevealed,
  setIsStartDisabled,
  setIsDrawDisabled,
  setIsPassDisabled,
  setDealerCards,
  setGameResult,
}) => {
  // 👁 Открываем карты дилера
  setIsDealerRevealed(true);

  updateDisplayState({
    playerScore: calculateScore(playerCards),
    dealerScore: calculateScore(dealerCards),
    result: "Игрок пасует",
  });

  setIsStartDisabled(false);
  setIsDrawDisabled(true);
  setIsPassDisabled(true);

  // 🎲 Ход дилера
  await handleDealerTurn({
    deckId,
    dealerCards,
    playerCards,
    setDealerCards,
    setGameResult,
  });
};
