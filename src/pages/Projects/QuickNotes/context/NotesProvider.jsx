// src/pages/Projects/QuickNotes/context/NotesProvider.jsx
import React, { useEffect, useState } from "react";

import { NotesContext } from "./NotesContext";

const NotesProvider = ({ children }) => {
  // Инициализация с попыткой прочитать из localStorage сразу
  const [allNotes, setAllNotes] = useState(() => {
    try {
      const saved = localStorage.getItem("quickNotes");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [note, setNote] = useState("");
  const [filter, setFilter] = useState("");

  // Состояния модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  // Сохраняем в localStorage при изменении allNotes
  useEffect(() => {
    try {
      localStorage.setItem("quickNotes", JSON.stringify(allNotes));
    } catch {
      // Можно добавить обработку ошибки, если нужно
    }
  }, [allNotes]);

  return (
    <NotesContext.Provider
      value={{
        note,
        setNote,
        allNotes,
        setAllNotes,
        filter,
        setFilter,
        isModalOpen,
        setIsModalOpen,
        selectedNote,
        setSelectedNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
