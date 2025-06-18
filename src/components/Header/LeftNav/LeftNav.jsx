import "./LeftNav.scss";

import React from "react";
import { useNavigate } from "react-router-dom";

import LeftNavList from "../LeftNavList/LeftNavList";

const LeftNav = () => {
  const navigate = useNavigate();
  const goToHomeAnchor = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <div className="left-nav">
      <ul className="left-nav__links">
        <li>
          <a href="#about" onClick={() => goToHomeAnchor("about")}>
            Обо мне
          </a>
        </li>
        <li>
          <a
            href="#website-layout"
            onClick={() => goToHomeAnchor("website-layout")}
          >
            Вёрстка
          </a>
        </li>
        <li>
          <a
            href="#js-in-practice"
            onClick={() => goToHomeAnchor("js-in-practice")}
          >
            Практика <span lang="en">JS</span>
          </a>
        </li>
        <li>
          <a href="#contact-form" onClick={() => goToHomeAnchor("contact")}>
            Написать мне
          </a>
        </li>
      </ul>
      <div className="left-nav__list">
        <LeftNavList />
      </div>
    </div>
  );
};

export default LeftNav;
