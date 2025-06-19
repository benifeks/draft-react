import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./LeftNavList.module.scss";

const LeftNavList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const goToHomeAnchor = (section) => {
    navigate("/", { state: { scrollTo: section } });
    setIsOpen(false); // закрываем меню после перехода
  };

  return (
    <div className={styles.leftNav}>
      <button
        className={styles.leftNav__toggle}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        Разделы 👇
      </button>

      {isOpen && (
        <ul className={styles.leftNav__list}>
          <li>
            <a href="#about" onClick={() => goToHomeAnchor("about")}>
              Обо мне
            </a>
          </li>
          <li>
            <a
              href="#website-layout"
              onClick={() => goToHomeAnchor("website-layout")}
            >
              Вёрстка
            </a>
          </li>
          <li>
            <a
              href="#js-in-practice"
              onClick={() => goToHomeAnchor("js-in-practice")}
            >
              Практика <span lang="en">JS</span>
            </a>
          </li>
          <li>
            <a href="#contact-form" onClick={() => goToHomeAnchor("contact")}>
              Написать мне
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LeftNavList;
