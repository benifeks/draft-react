import React from "react";

import symbolDefs from "../../assets/images/svg/technologies/symbol-defs.svg";
import { icons } from "./icons";
import LinkAngular from "./LinkAngular/LinkAngular";
import styles from "./Technologies.module.scss";

const Technologies = () => {
  return (
    <section className={styles.technologies} id="technologies">
      <h2>Технологии</h2>
      <h3 className={styles.technologies__title}>
        <span>🔧 Инструменты </span>
        <span>и технологии ⚙️</span>
      </h3>
      <div className={styles.technologies__container}>
        <div className={styles.technologies__containerBlock}>
          {icons.block_1.map((icon) => (
            <svg
              className={styles.technologies__containerIcon__Logo}
              key={icon}
            >
              <use href={`${symbolDefs}#icon-${icon}`} />
            </svg>
          ))}
        </div>
        <div className={styles.technologies__containerBlock}>
          {icons.block_2.map((icon) => (
            <svg
              className={styles.technologies__containerIcon__Logo}
              key={icon}
            >
              <use href={`${symbolDefs}#icon-${icon}`} />
            </svg>
          ))}
        </div>
      </div>
      <LinkAngular />
    </section>
  );
};

export default Technologies;
