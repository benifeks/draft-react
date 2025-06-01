import React from "react";
import my_foto_1 from "../../../assets/images/about/my_foto_1.jpg";
import sprite from "../../../assets/images/about/symbol-defs.svg";
import aboutText from "../aboutText";
import "./JustYesterday.scss";

const JustYesterday = () => {
  return (
    <ul className="about-card">
      <li className="about-card__item about-card__img">
        <img
          className="left"
          src={my_foto_1}
          alt={aboutText.article_1.imageAlt}
        />
      </li>
      <li className="about-card__item">
        <p>{aboutText.article_1.messageOne}</p>
        <p>{aboutText.article_1.messageTwo}</p>
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
