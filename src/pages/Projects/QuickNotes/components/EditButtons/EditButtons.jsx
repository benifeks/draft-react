import React from "react";

import styles from "./EditButtons.module.scss";

const EditButtons = ({ isEditing, onEditClick, onDoneClick }) => {
  return (
    <div className={styles.editButtons}>
      {!isEditing ? (
        <button
          type="button"
          onClick={onEditClick}
          className={styles.editButton}
          aria-label="Изменить"
        >
          ✏️ Изменить
        </button>
      ) : (
        <button
          type="button"
          onClick={onDoneClick}
          className={styles.doneButton}
          aria-label="Готово"
        >
          ✔️ Готово
        </button>
      )}
    </div>
  );
};

export default EditButtons;
