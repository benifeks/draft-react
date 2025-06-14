import React from "react";
import "./JSinPractice.scss";
import { Card } from "../../ui/Card/Card";
import { cardsData } from "./jspCards";
import LinkButton from "../../ui/Buttons/LinkButton/LinkButton";

const JSinPractice = () => {
  return (
    <section className="js-in-practice" id="js-in-practice">
      <h2>JavaScript на практике</h2>
      <h3>📝 Задачи и мини-проекты 📂</h3>
      <p className="js-in-practice__description">
        Реализация алгоритмов и логики в задачах, а также небольших практических
        проектов с чистым JS.
      </p>
      <div className="js-in-practice__container">
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
      </div>
    </section>
  );
};

export default JSinPractice;
