import React from "react";

import RightNavList from "../RightNavList/RightNavList";
import styles from "./RightNav.module.scss";

const RightNav = () => {
  return (
    <nav className={styles.rightNav}>
      <div className={styles.rightNav__pagesList}>
        <RightNavList />
      </div>
      <ul className={styles.rightNav__pages}>
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
