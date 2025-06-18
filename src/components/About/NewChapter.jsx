import React from "react";

import Card from "../../ui/Card/Card";
import aboutVariables from "./aboutText";

const NewChapter = () => {
  return (
    <article>
      <Card
        title={aboutVariables.article_2.articleTitle}
        description={aboutVariables.article_2.message}
        image={aboutVariables.article_2.imageUrl}
        link={aboutVariables.article_2.imageAlt}
        className={`about__container--card`}
      >
        {aboutVariables.article_2.children}
      </Card>
    </article>
  );
};

export default NewChapter;
