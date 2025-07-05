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
            <a
              href="https://github.com/benifeks/draft-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span lang="en">GitHub</span>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default RightNavList;
