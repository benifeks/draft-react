import "./About.scss";

import React from "react";

import aboutVariables from "./aboutText";
import JustYesterday from "./JustYesterday";
import NewChapter from "./NewChapter";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>{aboutVariables.aboutTitle}</h2>
      <div className="about__container">
        <JustYesterday />
        <NewChapter />
      </div>
    </section>
  );
};

export default About;
