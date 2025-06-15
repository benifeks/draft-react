import React from "react";

import "./RightNav.scss";

import RightNavList from "../RightNavList/RightNavList";

const RightNav = () => {
  return (
    <nav className="right-nav">
      <div className="right-nav__pages-list">
        <RightNavList />
      </div>
      <ul className="right-nav__pages">
        <li>
          <a href="/lab">Лаборатория</a>
        </li>
        <li>
          <a href="/exercises">Задачи</a>
        </li>
      </ul>
    </nav>
  );
};

export default RightNav;
