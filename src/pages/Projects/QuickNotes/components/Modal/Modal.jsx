// src/pages/Projects/QuickNotes/components/Modal/Modal.jsx
import React, { useContext, useEffect, useState } from "react";

import { NotesContext } from "../../context/NotesContext";
import formatDate from "../../utils/formatDate";
import styles from "./Modal.module.scss";

const Modal = () => {
  const {
    isModalOpen,
    selectedNote,
    setIsModalOpen,
    setSelectedNote,
    allNotes,
    setAllNotes,
  } = useContext(NotesContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  // При открытии модалки заполняем textarea текущим текстом заметки
  useEffect(() => {
    if (selectedNote) {
      setEditText(selectedNote.text);
      setIsEditing(false);
    }
  }, [selectedNote]);

  if (!isModalOpen || !selectedNote) return null;

  // Закрытие модалки
  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
    setIsEditing(false);
  };

  // Закрытие по клику вне модального окна
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDoneClick = () => {
    const trimmedText = editText.trim();

    // Обновляем заметку в общем списке, если текст изменился
    const updatedNotes = allNotes.map((note) =>
      note.id === selectedNote.id
        ? {
            ...note,
            text: trimmedText || note.text,
            lastModified: Date.now(),
          }
        : note
    );
    setAllNotes(updatedNotes);

    // Обновляем выбранную заметку
    setSelectedNote((prev) => ({
      ...prev,
      text: trimmedText || prev.text,
      lastModified: Date.now(),
    }));

    setIsEditing(false);
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Закрыть"
        >
          ❌
        </button>

        <div className={styles.content}>
          {/* Показываем дату последнего изменения, если она отличается от даты создания */}
          {selectedNote.lastModified &&
            selectedNote.lastModified !== selectedNote.id && (
              <p className={styles.date}>
                <em>
                  Последнее изменение: {formatDate(selectedNote.lastModified)}
                </em>
              </p>
            )}

          {!isEditing ? (
            <>
              <p>{selectedNote.text}</p>
              <button
                type="button"
                onClick={handleEditClick}
                className={styles.editButton}
                aria-label="Изменить заметку"
              >
                ✏️ Изменить
              </button>
            </>
          ) : (
            <>
              <textarea
                className={styles.textarea}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                rows={6}
                aria-label="Редактирование заметки"
              />
              <button
                type="button"
                onClick={handleDoneClick}
                className={styles.doneButton}
                aria-label="Готово"
                disabled={!editText.trim()}
              >
                ✔️ Готово
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
