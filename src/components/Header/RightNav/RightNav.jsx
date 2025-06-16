import "./RightNav.scss";

import React from "react";

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
          <a
            href="https://github.com/benifeks/draft-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span lang="en">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default RightNav;
