import "./JSinPractice.scss";

import React from "react";

import MiniProjects from "./MiniProjects";
import Tasks from "./Tasks";

const JSinPractice = () => {
  return (
    <section className="js-in-practice" id="js-in-practice">
      <h2>
        JavaScript
        <br /> на практике
      </h2>
      <h3>📝 Задачи и мини-проекты 📂</h3>
      <div className="js-in-practice__container">
        <article className="article">
          <h4>Задачи</h4>
          <Tasks />
        </article>
        <article className="article">
          <h4>Мини-проекты</h4>
          <MiniProjects />
        </article>
      </div>
    </section>
  );
};

export default JSinPractice;
