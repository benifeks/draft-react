import React from "react";
import sprite from "../../assets/images/about/symbol-defs.svg";
import aboutVariables from "./aboutText";

const JustYesterday = () => {
  return (
    <ul className="about-card">
      <li className="about-card__item about-card__img">
        <img
          className="left"
          src={aboutVariables.article_1.imageUrl}
          alt={aboutVariables.article_1.imageAlt}
        />
      </li>
      <li className="about-card__item">
        <p>{aboutVariables.article_1.messageOne}</p>
        <p>{aboutVariables.article_1.messageTwo}</p>
      </li>
      <li className="about-card__item">
        <svg>
          <use href={`${sprite}#icon-GlitchMiner`} />
        </svg>
      </li>
    </ul>
  );
};

export default JustYesterday;
