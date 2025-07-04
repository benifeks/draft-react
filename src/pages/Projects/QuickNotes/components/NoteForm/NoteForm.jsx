// src/pages/Projects/QuickNotes/components/NoteForm/NoteForm.jsx
import React, { useContext } from "react";

import { NotesContext } from "../../context/NotesContext";
import styles from "./NoteForm.module.scss";

const NoteForm = () => {
  const { note, setNote, allNotes, setAllNotes } = useContext(NotesContext);

  const handleChange = (e) => setNote(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = note.trim();
    if (!trimmed) return;

    setAllNotes([{ id: Date.now(), text: trimmed }, ...allNotes]);
    setNote("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault(); // предотвращаем переход на новую строку
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.textarea}
        value={note}
        onChange={handleChange}
        placeholder="Введите заметку..."
        onKeyDown={handleKeyDown}
        rows={3}
      />
      <button type="submit" className={styles.button}>
        ➕ Добавить
      </button>
    </form>
  );
};

export default NoteForm;
