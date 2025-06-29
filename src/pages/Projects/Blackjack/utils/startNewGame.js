import { checkInitialGameResult } from "./checkInitialGameResult";
import { drawCards, getNewDeck } from "./deckApi";
import { calculateScore } from "./scoring";

/**
 * Запускает новую игру: создаёт колоду, раздаёт карты, считает очки и определяет завершение.
 *
 * @param {Function} setDeckId
 * @param {Function} setPlayerCards
 * @param {Function} setDealerCards
 * @param {Function} setIsStartDisabled
 * @param {Function} setIsDrawDisabled
 * @param {Function} setIsPassDisabled
 * @param {Function} setIsInitialResultSet
 * @param {Function} setIsDealerRevealed
 */
export const startNewGame = async ({
  setDeckId,
  setPlayerCards,
  setDealerCards,
  setIsStartDisabled,
  setIsDrawDisabled,
  setIsPassDisabled,
  setIsInitialResultSet,
  setIsDealerRevealed,
}) => {
  setIsDealerRevealed(false);

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

  setIsInitialResultSet(true);

  setIsStartDisabled(!isGameOver);
  setIsDrawDisabled(isGameOver);
  setIsPassDisabled(isGameOver);
};
