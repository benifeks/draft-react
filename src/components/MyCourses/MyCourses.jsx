import "./MyCourses.scss";

import React from "react";

import symbolDefs from "../../assets/images/svg/technologies/symbol-defs.svg";
import { courses } from "./courses";

const MyCourses = () => {
  return (
    <section className="my-courses" id="my-courses">
      <h2>Курсы</h2>
      <h3>📚 Курсы которые я проходил 👣</h3>
      <ul className="my-courses__container">
        {courses.map((course) => (
          <li className="my-courses__container--item" key={course.id}>
            <div className="my-courses__container--item__icons">
              {course.icons.map((icon) => (
                <svg
                  className="my-courses__container--item__icons--icon-logo"
                  key={icon}
                >
                  <use href={`${symbolDefs}#icon-${icon}`} />
                </svg>
              ))}
            </div>
            <a
              className="external-link-button"
              href={course.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {course.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyCourses;
