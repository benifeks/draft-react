import React from "react";
import "./Technologies.scss";
import symbolDefs from "../../assets/images/svg/technologies/symbol-defs.svg";

const Technologies = () => {
  return (
    <section className="technologies" id="technologies">
      <h2>Технологии</h2>
      <h3>🔧Используемые инструменты и технологии⚙️</h3>
      <div className="technologies__container">
        <svg className="technologies__container--icon-logo">
          <use href={`${symbolDefs}#icon-html5`} />
        </svg>
        <svg className="technologies__container--icon-logo">
          <use href={`${symbolDefs}#icon-css`} />
        </svg>
        <svg className="technologies__container--icon-logo">
          <use href={`${symbolDefs}#icon-javascript`} />
        </svg>
        <svg className="technologies__container--icon-logo">
          <use href={`${symbolDefs}#icon-sass`} />
        </svg>
        <svg className="technologies__container--icon-logo">
          <use href={`${symbolDefs}#icon-react`} />
        </svg>
        <svg className="technologies__container--icon-logo">
          <use href={`${symbolDefs}#icon-vercel`} />
        </svg>
        <svg className="technologies__container--icon-logo">
          <use href={`${symbolDefs}#icon-npm`} />
        </svg>
        <svg className="technologies__container--icon-logo">
          <use href={`${symbolDefs}#icon-github`} />
        </svg>
        <svg className="technologies__container--icon-logo">
          <use href={`${symbolDefs}#icon-figma`} />
        </svg>
        <svg className="technologies__container--icon-logo">
          <use href={`${symbolDefs}#icon-chatgpt-1`} />
        </svg>
      </div>
    </section>
  );
};

export default Technologies;
