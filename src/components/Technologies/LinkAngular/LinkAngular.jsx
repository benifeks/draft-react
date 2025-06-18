import "./LinkAngular.scss";

import React from "react";

import symbolDefs from "../../../assets/images/svg/technologies/symbol-defs.svg";

const LinkAngular = () => {
  return (
    <div className="link-angular">
      <a
        href="https://github.com/benifeks/study-angular"
        target="_blank"
        rel="noopener noreferrer"
      >
        Этот же проект, но на
        <svg className="link-angular--logo">
          <use href={`${symbolDefs}#icon-angular`} />
        </svg>
      </a>
    </div>
  );
};

export default LinkAngular;
