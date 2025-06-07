import { useState, useEffect } from "react";

// Кастомный хук useFetch — выполняет GET-запрос и управляет состояниями: data, loading, error
export function useFetch(url, options = {}) {
  // Состояние для полученных данных
  const [data, setData] = useState(null);
  // Состояние загрузки
  const [loading, setLoading] = useState(true);
  // Состояние ошибки
  const [error, setError] = useState(null);

  useEffect(() => {
    // Если url не задан — выходим
    if (!url) return;

    // Создаём контроллер для отмены запроса при размонтировании компонента или изменении зависимостей
    const controller = new AbortController();
    const { signal } = controller;

    // Сбрасываем состояние перед новым запросом
    setLoading(true);
    setError(null);

    // Выполняем fetch-запрос
    fetch(url, { ...options, signal })
      .then((res) => {
        // Если ответ не ок — выбрасываем ошибку
        if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
        // Преобразуем ответ в JSON
        return res.json();
      })
      .then((json) => setData(json)) // Устанавливаем данные в state
      .catch((err) => {
        // Обрабатываем ошибку, игнорируя ошибку отмены запроса
        if (err.name !== "AbortError") {
          setError(err);
        }
      })
      .finally(() => setLoading(false)); // Независимо от результата — отключаем загрузку

    // Очистка эффекта: отмена fetch-запроса при размонтировании компонента
    return () => controller.abort();
  }, [url, options]); // Повторно запускаем эффект при изменении url или options

  // Возвращаем состояние хука
  return { data, loading, error };
}
