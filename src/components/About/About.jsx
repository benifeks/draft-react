import React from "react";
import JustYesterday from "./JustYesterday";
import NewChapter from "./NewChapter";
import sprite from "../../assets/images/about/symbol-defs.svg";
import aboutVariables from "./aboutText";
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>Немного о себе</h2>
      <article>
        <h3>{aboutVariables.article_1.articleTitle}</h3>
        <JustYesterday />
      </article>
      <div>
        <svg>
          <use href={`${sprite}#icon-boy-1`} />
        </svg>
      </div>
      <article>
        <h3>{aboutVariables.article_2.articleTitle}</h3>
        <NewChapter />
      </article>
      <div>
        <svg>
          <use href={`${sprite}#icon-female-1`} />
        </svg>
      </div>
    </section>
  );
};

export default About;
