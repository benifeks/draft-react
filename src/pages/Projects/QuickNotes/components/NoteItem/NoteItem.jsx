// src/pages/Projects/QuickNotes/components/NoteItem/NoteItem.jsx
import React from "react";

import formatDate from "../../utils/formatDate"; // утилита форматирования даты
import NoteModalButton from "../NoteModalButton/NoteModalButton";
import styles from "./NoteItem.module.scss";

const MAX_PREVIEW_LENGTH = 3; // Длина превью в списке

const NoteItem = ({ note, onDelete }) => {
  const previewText =
    note.text.length > MAX_PREVIEW_LENGTH
      ? note.text.slice(0, MAX_PREVIEW_LENGTH) + "..."
      : note.text;

  return (
    <li className={styles.noteItem}>
      <NoteModalButton note={note} />
      <span className={styles.text}>
        {formatDate(note.id)} — {previewText}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(note.id)}
        title="Удалить заметку"
      >
        ❌
      </button>
    </li>
  );
};

export default NoteItem;
