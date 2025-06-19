import React from "react";

import styles from "./About.module.scss";
import aboutVariables from "./aboutText";

const JustYesterday = () => {
  return (
    <article className={styles.about__containerCard}>
      <h3>{aboutVariables.article_1.articleTitle}</h3>
      <div className={styles.about__imageWrapper}>
        <img
          src={aboutVariables.article_1.imageUrl}
          alt={aboutVariables.article_1.imageAlt || "card image"}
          className={styles.about__image}
        />
      </div>
      <p>{aboutVariables.article_1.message}</p>
      {aboutVariables.article_1.children}
    </article>
  );
};

export default JustYesterday;
