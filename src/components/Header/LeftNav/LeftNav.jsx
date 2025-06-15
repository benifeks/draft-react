import React from "react";
import { useNavigate } from "react-router-dom";

import "./LeftNav.scss";

const LeftNav = () => {
  const navigate = useNavigate();
  const goToHomeAnchor = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <ul className="left-nav">
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
  );
};

export default LeftNav;
