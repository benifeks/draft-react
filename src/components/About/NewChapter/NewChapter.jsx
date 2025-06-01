import React from "react";
import my_foto_2 from "../../../assets/images/about/my_foto_2.jpg";
import sprite from "../../../assets/images/about/symbol-defs.svg";
import aboutText from "../aboutText";
import "./NewChapter.scss";

const NewChapter = () => {
  return (
    <ul className="about-card">
      <li className="about-card__item">
        <svg>
          <use href={`${sprite}#icon-be-2258264`} />
        </svg>
        <svg>
          <use href={`${sprite}#icon-characters_operator`} />
        </svg>
      </li>
      <li className="about-card__item">
        <p>{aboutText.article_2.messageOne}</p>
        <p>{aboutText.article_2.messageTwo}</p>
      </li>
      <li className="about-card__item about-card__img">
        <img
          className="right"
          src={my_foto_2}
          alt={aboutText.article_2.imageAlt}
        />
      </li>
    </ul>
  );
};

export default NewChapter;
