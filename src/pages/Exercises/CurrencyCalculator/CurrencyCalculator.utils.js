export const getExchangeRate = async () => {
  try {
    const response = await fetch(
      "https://api.exchangerate.fun/latest?base=USD"
    );
    const data = await response.json();
    return data.rates.UAH;
  } catch (error) {
    console.error("Ошибка при получении курса:", error);
    return null;
  }
};

export const convertToUSD = (uah, rate) => {
  return parseFloat(uah) / rate;
};
