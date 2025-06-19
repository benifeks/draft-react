import React, { useState } from "react";

import CardExercises from "../ui/CardExercises/CardExercises";
import styles from "./CurrencyCalculator.module.scss";
import { convertToUSD, getExchangeRate } from "./CurrencyCalculator.utils";

const CurrencyCalculator = () => {
  const [uah, setUah] = useState("");
  const [usd, setUsd] = useState(null);
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUah(e.target.value);
    setUsd(null);
    setRate(null);
  };

  const handleConvert = async () => {
    if (!uah) return;

    setLoading(true);
    const exchangeRate = await getExchangeRate();
    const result = convertToUSD(uah, exchangeRate);

    setRate(exchangeRate);
    setUsd(result);
    setLoading(false);
  };

  const handleClear = () => {
    setUah("");
    setUsd(null);
    setRate(null);
  };

  return (
    <CardExercises title="Калькулятор валют">
      <div className={styles.currencyCalculator}>
        <h3>💱 Конвертер 💵</h3>
        <input
          className={styles.currencyCalculator__input}
          type="number"
          value={uah}
          onChange={handleChange}
          placeholder="Введите сумму в гривне"
        />
        <div className={styles.currencyCalculator__buttons}>
          <button onClick={handleConvert}>▶️ Конвертировать</button>
          <button onClick={handleClear}>🆑 Очистить</button>
        </div>

        {loading && <p>Загрузка...</p>}

        {usd !== null && (
          <p>
            💸 {uah} грн ≈ {usd.toFixed(2)} $
          </p>
        )}

        {rate && <p>📊 Текущий курс: 1 USD = {rate} грн</p>}
      </div>
    </CardExercises>
  );
};

export default CurrencyCalculator;
