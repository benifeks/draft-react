// src/pages/Projects/QuickNotes/components/NoteModalButton/NoteModalButton.jsx
import React, { useContext } from "react";

import { NotesContext } from "../../context/NotesContext";

const NoteModalButton = ({ note }) => {
  const { setSelectedNote, setIsModalOpen } = useContext(NotesContext);

  const handleClick = () => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  return (
    <button onClick={handleClick} title="Открыть заметку">
      👁️
    </button>
  );
};

export default NoteModalButton;
