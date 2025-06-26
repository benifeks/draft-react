/**
 * Подсчитывает сумму очков руки в Blackjack.
 * @param {Array} cards - массив карт, каждая карта содержит поле 'value' (например, "2", "KING", "ACE")
 * @returns {number} - сумма очков
 */
export function calculateScore(cards) {
  let score = 0;
  let aceCount = 0;

  for (const card of cards) {
    const value = card.value;

    if (value === "ACE") {
      aceCount += 1;
      score += 11; // считаем сначала 11 за туз
    } else if (["KING", "QUEEN", "JACK"].includes(value)) {
      score += 10;
    } else {
      score += Number(value);
    }
  }

  // Если сумма больше 21, уменьшаем значение туза с 11 до 1
  while (score > 21 && aceCount > 0) {
    score -= 10; // уменьшаем на 10, т.к. ACE вместо 11 становится 1
    aceCount -= 1;
  }

  return score;
}
