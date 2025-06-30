// src/pages/Projects/Table/hooks/useLoadUsers.js
import { useCallback, useState } from "react";

import { fetchUsers } from "../api/fetchUsers";

export const useLoadUsers = () => {
  // Состояние для хранения массива пользователей
  const [users, setUsers] = useState([]);
  // Состояние для отображения загрузки
  const [loading, setLoading] = useState(false);
  // Состояние для ошибок загрузки
  const [error, setError] = useState(null);

  // Функция загрузки пользователей, обернутая в useCallback для мемоизации
  // По умолчанию загружается 1 пользователь
  const loadUsers = useCallback(async (countUsers = 1) => {
    setLoading(true); // Устанавливаем состояние загрузки в true
    setError(null); // Сбрасываем ошибки перед новой загрузкой
    try {
      const data = await fetchUsers(countUsers); // Запрашиваем одного пользователей через утилиту
      setUsers(data); // Сохраняем загруженных пользователей в состояние
      return data; // Возвращаем данные для удобства (если нужно)
    } catch (err) {
      setError(err.message || "Unknown error"); // В случае ошибки сохраняем её в состояние
      return []; // Возвращаем пустой массив при ошибке
    } finally {
      setLoading(false); // Завершаем загрузку (усливаем состояние)
    }
  }, []); // Зависимости пустые, функция создаётся один раз

  // Возвращаем состояние и функцию загрузки для использования в компонентах
  return { users, loading, error, loadUsers };
};
