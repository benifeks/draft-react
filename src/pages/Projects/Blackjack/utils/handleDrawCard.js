import { drawCards } from "./deckApi";
import { calculateScore } from "./scoring";
import { updateDisplayState } from "./updateDisplayState";

/**
 * Обрабатывает добор карты игроком, подсчитывает очки и обновляет состояние.
 *
 * @param {string} deckId — ID текущей колоды
 * @param {Array} playerCards — текущие карты игрока
 * @param {Array} dealerCards — текущие карты дилера
 * @param {Function} setPlayerCards — сеттер для playerCards
 * @param {Function} setIsStartDisabled
 * @param {Function} setIsDrawDisabled
 * @param {Function} setIsPassDisabled
 */
export const handleDrawCard = async ({
  deckId,
  playerCards,
  dealerCards,
  setPlayerCards,
  setIsStartDisabled,
  setIsDrawDisabled,
  setIsPassDisabled,
}) => {
  if (!deckId) return;

  const newCardPlayer = await drawCards(deckId, 1);
  if (!newCardPlayer) return;

  const updatedPlayerCards = [...playerCards, ...newCardPlayer];
  setPlayerCards(updatedPlayerCards);

  const playerScore = calculateScore(updatedPlayerCards);

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
      result: "Отличная рука - 21 очко!",
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
