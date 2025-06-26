import { updateDisplayState } from "./updateDisplayState";

/**
 * Проверяет результат начальной раздачи.
 * Возвращает true, если игра сразу заканчивается.
 */
export function checkInitialGameResult(playerScore, dealerScore) {
  if (playerScore < 21 && dealerScore < 21) {
    updateDisplayState({
      playerScore,
      dealerScore: "🙂",
      result: "Идёт игра",
    });
    return false; // игра продолжается
  }

  if (playerScore === 21 && dealerScore === 21) {
    updateDisplayState({
      playerScore,
      dealerScore,
      result: "Ничья: оба с блэкджеком",
    });
    return true;
  }

  if (playerScore === 21) {
    updateDisplayState({
      playerScore,
      dealerScore,
      result: "Игрок выигрывает с блэкджеком!",
    });
    return true;
  }

  if (dealerScore === 21) {
    updateDisplayState({
      playerScore,
      dealerScore,
      result: "Дилер выигрывает с блэкджеком!",
    });
    return true;
  }

  updateDisplayState({
    playerScore: "?",
    dealerScore: "?",
    result: "Ошибка: проверь логику подсчёта",
  });
  return true;
}
