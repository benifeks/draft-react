import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const goToHomeAnchor = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <nav className="nav">
      <div className="nav__left-nav">
        <a href="/" className="nav__left-nav--logo" lang="en">
          <span>🏠</span>Home
        </a>
        <ul className="nav__left-nav--personal-links">
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
        </ul>
      </div>
      <ul className="nav__right-nav">
        <li>
          <a href="/lab">Лаборатория</a>
        </li>
        <li>
          <a href="/exercises">Задачи</a>
        </li>
        <li className="nav__right-nav--contacts">
          <a href="#contact">
            <BsFacebook />
          </a>
          <a href="#contact">
            <BsTelegram />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
