// src/pages/Projects/Table/utils/findUserById.js

/**
 * Находит пользователя по uuid в заданном массиве.
 * @param {Array} userArray - Массив пользователей.
 * @param {string} uuid - Уникальный идентификатор пользователя.
 * @returns {Object|null} Найденный пользователь или null.
 */
const findUserById = (userArray, uuid) => {
  if (!Array.isArray(userArray)) return null;
  return userArray.find((user) => user.login?.uuid === uuid) || null;
};

export default findUserById;
