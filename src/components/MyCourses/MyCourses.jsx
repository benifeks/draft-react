import React from "react";

import symbolDefs from "../../assets/images/svg/technologies/symbol-defs.svg";
import { courses } from "./courses";
import styles from "./MyCourses.module.scss";

const MyCourses = () => {
  return (
    <section className={styles.myCourses} id="my-courses">
      <h2>Курсы</h2>
      <h3>📚 Курсы которые я проходил 👣</h3>
      <ul className={styles.myCourses__container}>
        {courses.map((course) => (
          <li className={styles.myCourses__container__item} key={course.id}>
            <div className={styles.myCourses__container__itemIcons}>
              {course.icons.map((icon) => (
                <svg
                  className={styles.myCourses__container__itemIcons__iconLogo}
                  key={icon}
                >
                  <use href={`${symbolDefs}#icon-${icon}`} />
                </svg>
              ))}
            </div>
            <a
              className={styles.externalLinkButton}
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
