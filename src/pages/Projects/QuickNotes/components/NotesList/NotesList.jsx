// src / pages / Projects / QuickNotes / components / NotesList / NotesList.jsx;
import React, { useContext } from "react";

import { NotesContext } from "../../context/NotesContext";
import NoteItem from "../NoteItem/NoteItem"; // импортируем новый компонент
import styles from "./NotesList.module.scss";

const NotesList = () => {
  const { allNotes, filter, setAllNotes } = useContext(NotesContext);

  // Удаление заметки по id
  const handleDelete = (id) => {
    setAllNotes((prev) => prev.filter((note) => note.id !== id));
  };

  // Очистка всех заметок
  const handleClearNotes = () => {
    setAllNotes([]);
  };

  // Фильтрация заметок по тексту
  const filteredNotes = allNotes.filter((note) =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredNotes.length === 0) {
    return <p className={styles.empty}>Нет заметок для отображения.</p>;
  }

  return (
    <article className={styles.notesList}>
      <h3 className={styles.title}>заметки</h3>
      <ul className={styles.list}>
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} onDelete={handleDelete} />
        ))}
      </ul>
      <button
        type="button"
        className={styles.clearButton}
        onClick={handleClearNotes}
      >
        🗑️ Очистить
      </button>
    </article>
  );
};

export default NotesList;
