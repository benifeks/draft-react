import "./Technologies.scss";

import React from "react";

import symbolDefs from "../../assets/images/svg/technologies/symbol-defs.svg";
import { icons } from "./icons";
import LinkAngular from "./LinkAngular/LinkAngular";

const Technologies = () => {
  return (
    <section className="technologies" id="technologies">
      <h2>Технологии</h2>
      <h3 className="technologies__title--h3">
        <span>🔧 Инструменты </span>
        <span>и технологии ⚙️</span>
      </h3>
      <div className="technologies__container">
        <div className="technologies__container--block">
          {icons.block_1.map((icon) => (
            <svg className="technologies__container--icon-logo" key={icon}>
              <use href={`${symbolDefs}#icon-${icon}`} />
            </svg>
          ))}
        </div>
        <div className="technologies__container--block">
          {icons.block_2.map((icon) => (
            <svg className="technologies__container--icon-logo" key={icon}>
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
