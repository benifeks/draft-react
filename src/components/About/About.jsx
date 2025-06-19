import React from "react";

import styles from "./About.module.scss";
import aboutVariables from "./aboutText";
import JustYesterday from "./JustYesterday";
import NewChapter from "./NewChapter";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.about__title}>{aboutVariables.aboutTitle}</h2>
      <div className={styles.about__container}>
        <JustYesterday />
        <NewChapter />
      </div>
    </section>
  );
};

export default About;
