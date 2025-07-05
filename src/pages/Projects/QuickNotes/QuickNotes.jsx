// src/pages/Projects/QuickNotes/QuickNotes.jsx
import React from "react";

import useScrollToHash from "../../../hooks/useScrollToHash";
import FilterInput from "./components/FilterInput/FilterInput";
import Modal from "./components/Modal/Modal";
import NoteForm from "./components/NoteForm/NoteForm";
import NotesList from "./components/NotesList/NotesList";
import NotesProvider from "./context/NotesProvider";
import styles from "./QuickNotes.module.scss";

const QuickNotes = () => {
  useScrollToHash();
  return (
    <section className={styles.notes} id="quickNotes">
      <h2 className={styles.title}>📒 Заметки</h2>
      <NotesProvider>
        <NoteForm />
        <FilterInput />
        <NotesList />
        <Modal />
      </NotesProvider>
    </section>
  );
};

export default QuickNotes;
