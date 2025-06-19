import React from "react";

import styles from "./About.module.scss";
import aboutVariables from "./aboutText";

const NewChapter = () => {
  return (
    <article className={styles.about__containerCard}>
      <h3>{aboutVariables.article_2.articleTitle}</h3>
      <div className={styles.about__imageWrapper}>
        <img
          src={aboutVariables.article_2.imageUrl}
          alt={aboutVariables.article_2.imageAlt || "card image"}
          className={styles.about__image}
        />
      </div>
      <p>{aboutVariables.article_2.message}</p>
      {aboutVariables.article_2.children}
    </article>
  );
};

export default NewChapter;
