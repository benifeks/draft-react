/**
 * Генерирует случайное число от 1 до 100.
 * Вызывается при старте новой игры.
 * @returns {number}
 */
export const generateSecretNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

/**
 * Очищает состояние игры:
 * - сбрасывает введённое число
 * - сбрасывает результат
 * - генерирует новое число
 * - сбрасывает количество попыток
 *
 * @param {Function} setGuess - обновление введённого значения
 * @param {Function} setResult - очистка результата
 * @param {Function} setSecretNumber - установка нового числа
 * @param {Function} setAttemptsLeft - сброс количества попыток
 */
export const resetGame = (
  setGuess,
  setResult,
  setSecretNumber,
  setAttemptsLeft
) => {
  setGuess("");
  setResult("");
  setSecretNumber(generateSecretNumber());
  setAttemptsLeft(5); // количество попыток по умолчанию
};

/**
 * Обрабатывает попытку угадать число.
 * @param {string|number} guess - введённое пользователем число
 * @param {number} secretNumber - загаданное число
 * @param {number} attemptsLeft - сколько попыток осталось
 * @param {Function} setAttemptsLeft - функция обновления оставшихся попыток
 * @param {Function} setResult - функция установки результата
 */
export const handleGuess = (
  guess,
  secretNumber,
  attemptsLeft,
  setAttemptsLeft,
  setResult
) => {
  const number = Number(guess);

  // Проверка на корректность ввода
  if (!number || number < 1 || number > 100) {
    setResult("❗ Введите число от 1 до 100");
    return;
  }

  if (number === secretNumber) {
    setResult(`🎉 Угадал! Загаданное число: ${secretNumber}`);
  } else {
    const newAttempts = attemptsLeft - 1;
    setAttemptsLeft(newAttempts);

    if (newAttempts === 0) {
      setResult(`😢 Не угадал. Было загадано: ${secretNumber}`);
    } else {
      setResult(number < secretNumber ? "🔼 Больше" : "🔽 Меньше");
    }
  }
};
