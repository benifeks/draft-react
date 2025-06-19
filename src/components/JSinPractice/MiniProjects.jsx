import React from "react";

import LinkButton from "../../ui/Buttons/LinkButton/LinkButton";
import { Card } from "../../ui/Card/Card";
import styles from "./JSinPractice.module.scss";
import { cardsData } from "./jspCards";

const MiniProjects = () => {
  return (
    <ul className={styles.jsInPractice__containerColumns}>
      {cardsData.projects.map((project, index) => (
        <li key={index}>
          <Card
            title={project.title}
            description={project.description}
            link={project.link}
            className={styles.jsInPractice__containerColumns__card}
          >
            <LinkButton
              to={project.link}
              className={styles.jsInPractice__containerColumns__cardBtn}
            >
              Go to "{project.title}"
            </LinkButton>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default MiniProjects;
