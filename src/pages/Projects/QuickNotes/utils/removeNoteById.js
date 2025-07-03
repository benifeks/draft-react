// src/pages/Projects/QuickNotes/utils/removeNoteById.js

/**
 * Удаляет заметку по id из массива заметок
 * @param {Array} notes - текущий массив заметок
 * @param {string} id - id удаляемой заметки
 * @returns {Array} - обновлённый массив без удалённой заметки
 */
const removeNoteById = (notes, id) => {
  return notes.filter((note) => note.id !== id);
};

export default removeNoteById;
