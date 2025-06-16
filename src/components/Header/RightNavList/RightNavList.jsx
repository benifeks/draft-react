import "./RightNavList.scss";

import React, { useState } from "react";

const RightNavList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="right-nav-list">
      <button
        className="right-nav-list__toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        Страницы 👇
      </button>

      {isOpen && (
        <ul className="right-nav-list__list">
          <li>
            <a href="/lab">Лаборатория</a>
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
