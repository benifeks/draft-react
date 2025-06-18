import React from "react";

import LinkButton from "../../ui/Buttons/LinkButton/LinkButton";
import { Card } from "../../ui/Card/Card";
import { cardsData } from "./jspCards";

const MiniProjects = () => {
  return (
    <ul className="js-in-practice__container--columns">
      {cardsData.projects.map((project, index) => (
        <li key={index}>
          <Card
            title={project.title}
            description={project.description}
            link={project.link}
            className="js-in-practice__container--columns__card"
          >
            <LinkButton
              to={project.link}
              className="js-in-practice__container--columns__card--btn"
            >
              Go to {project.title}
            </LinkButton>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default MiniProjects;
