import React from "react";
import aboutVariables from "./aboutText";

const NewChapter = () => {
  return (
    <ul className="about-card">
      <li className="about-card__item">
        <svg>
          <use href={`${aboutVariables.sprite}#icon-be-2258264`} />
        </svg>
        <svg>
          <use href={`${aboutVariables.sprite}#icon-characters_operator`} />
        </svg>
      </li>
      <li className="about-card__item">
        <p>{aboutVariables.article_2.messageOne}</p>
        <p>{aboutVariables.article_2.messageTwo}</p>
      </li>
      <li className="about-card__item about-card__img">
        <img
          className="right"
          src={aboutVariables.article_2.imageUrl}
          alt={aboutVariables.article_2.imageAlt}
        />
      </li>
    </ul>
  );
};

export default NewChapter;
