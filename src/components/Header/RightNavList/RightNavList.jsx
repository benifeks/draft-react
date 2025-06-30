import React, { useState } from "react";

import styles from "./RightNavList.module.scss";

const RightNavList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.rightNavList}>
      <button
        className={styles.rightNavList__toggle}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        Страницы 👇
      </button>

      {isOpen && (
        <ul className={styles.rightNavList__list}>
          <li>
            <a href="/projects">мини-проекты</a>
          </li>
          <li>
            <a href="/exercises">Задачи</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default RightNavList;
