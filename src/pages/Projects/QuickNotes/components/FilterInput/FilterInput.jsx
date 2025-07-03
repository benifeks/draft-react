// src/pages/Projects/QuickNotes/components/FilterInput/FilterInput.jsx
import React, { useContext } from "react";

import { NotesContext } from "../../context/NotesContext";
import styles from "./FilterInput.module.scss";

const FilterInput = () => {
  const { filter, setFilter } = useContext(NotesContext);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const clearFilter = () => {
    setFilter("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      clearFilter();
    }
  };

  return (
    <div className={styles.filterWrapper}>
      <input
        type="text"
        placeholder="Поиск заметок..."
        value={filter}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.filterInput}
        aria-label="Фильтр заметок"
      />
      {filter && (
        <button
          className={styles.clearButton}
          onClick={clearFilter}
          aria-label="Очистить фильтр"
        >
          ❌
        </button>
      )}
    </div>
  );
};

export default FilterInput;
