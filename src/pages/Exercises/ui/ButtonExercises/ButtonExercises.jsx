import React from "react";

/**
 * @param {{
 *   onClick: () => void,
 *   isClear?: boolean,
 *   title?: string
 * }} props
 */
const ButtonExercises = ({ onClick, isClear = false, title = "" }) => {
  return (
    <button onClick={onClick} title={title} aria-label={title}>
      {isClear ? "🆑" : "▶️"}
    </button>
  );
};

export default ButtonExercises;
