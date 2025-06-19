import React from "react";

import LinkButton from "../../ui/Buttons/LinkButton/LinkButton";
import { Card } from "../../ui/Card/Card";
import styles from "./JSinPractice.module.scss";
import { cardsData } from "./jspCards";

const Tasks = () => {
  return (
    <ul className={styles.jsInPractice__containerColumns}>
      {cardsData.tasks.map((task, index) => (
        <li key={index}>
          <Card
            title={task.title}
            description={task.description}
            link={task.link}
            className={styles.jsInPractice__containerColumns__card}
          >
            <LinkButton
              to={task.link}
              className={styles.jsInPractice__containerColumns__cardBtn}
            >
              <span lang="en">Go to </span>
              <span>"{task.title}"</span>
            </LinkButton>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
