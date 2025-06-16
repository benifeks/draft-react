import React from "react";

import Card from "../../ui/Card/Card";
import aboutVariables from "./aboutText";

const JustYesterday = () => {
  return (
    <article>
      <Card
        title={aboutVariables.article_1.articleTitle}
        image={aboutVariables.article_1.imageUrl}
        link={aboutVariables.article_1.imageAlt}
        description={aboutVariables.article_1.message}
        className={`about__container--card`}
      >
        {aboutVariables.article_1.children}
      </Card>
    </article>
  );
};

export default JustYesterday;
