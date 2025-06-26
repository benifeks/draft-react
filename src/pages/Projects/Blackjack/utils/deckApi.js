// utils/deckApi.js

export async function getNewDeck() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );

  if (!response.ok) {
    throw new Error("Не удалось получить новую колоду");
  }

  const data = await response.json();
  return data; // вернёт объект с deck_id, remaining, shuffled, success
}

export async function drawCards(deckId, count) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
  );

  if (!response.ok) {
    throw new Error("Ошибка при вытягивании карт");
  }

  const data = await response.json();
  return data.cards; // вернёт массив карт
}
