import React from "react";

import symbolDefs from "../../../assets/images/svg/technologies/symbol-defs.svg";
import styles from "./LinkAngular.module.scss";

const LinkAngular = () => {
  return (
    <div className={styles.linkAngular}>
      <a
        href="https://github.com/benifeks/study-angular"
        target="_blank"
        rel="noopener noreferrer"
      >
        Этот же проект, но на
        <svg className={styles.linkAngular__logo}>
          <use href={`${symbolDefs}#icon-angular`} />
        </svg>
      </a>
    </div>
  );
};

export default LinkAngular;
