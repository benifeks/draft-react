// Blackjack/hooks/useUpdateDisplay.js
import { useEffect } from "react";

import { calculateScore } from "../utils/scoring";
import { updateDisplayState } from "../utils/updateDisplayState";

/**
 * Хук для автоматического обновления отображения очков и результата
 * при изменениях карт игрока/дилера или флагов состояния.
 */
export const useUpdateDisplay = ({
  playerCards,
  dealerCards,
  isInitialResultSet,
  gameResult,
  isDealerRevealed,
}) => {
  useEffect(() => {
    // Обновляем только если игра началась и игрок добирал карты
    if (playerCards.length > 2 && isInitialResultSet) {
      const pScore = calculateScore(playerCards);
      const dScore = calculateScore(dealerCards);

      updateDisplayState({
        playerScore: pScore,
        dealerScore: isDealerRevealed
          ? dScore // если открыты — показываем очки дилера
          : dealerCards.length > 2
          ? dScore // если добирал — показываем очки
          : "🙂", // если нет — скрываем
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
};
