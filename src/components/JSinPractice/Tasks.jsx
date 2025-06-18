import React from "react";

import LinkButton from "../../ui/Buttons/LinkButton/LinkButton";
import { Card } from "../../ui/Card/Card";
import { cardsData } from "./jspCards";

const Tasks = () => {
  return (
    <ul className="js-in-practice__container--columns">
      {cardsData.tasks.map((task, index) => (
        <li key={index}>
          <Card
            title={task.title}
            description={task.description}
            link={task.link}
            className="js-in-practice__container--columns__card"
          >
            <LinkButton
              to={task.link}
              className="js-in-practice__container--columns__card--btn"
            >
              Go to {task.title}
            </LinkButton>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
