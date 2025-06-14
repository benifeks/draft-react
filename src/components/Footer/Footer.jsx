import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const navigate = useNavigate();
  const goToHomeAnchor = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <section className="footer">
      <div className="footer__info">
        <ul className="footer__info--section">
          <li>
            <h4>Контакты</h4>
          </li>
          <li>
            <a href="#contact-form" onClick={() => goToHomeAnchor("contact")}>
              Написать мне
            </a>
          </li>
          <li>
            <a
              href="https://github.com/benifeks/draft-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Этот проект на <span lang="en">GitHub</span>
            </a>
          </li>
        </ul>
        <ul className="footer__info--section">
          <li>
            <h4>Социальные сети</h4>
          </li>
          <li>
            <a
              className="accent"
              href="https://facebook.com/skurko.sergej.2025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a
              className="accent"
              href="https://t.me/benifeks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelegram />
            </a>
          </li>
        </ul>
        <ul className="footer__info--section">
          <li>
            <h4>Навигация</h4>
          </li>
          <li>
            <a href="#home" onClick={() => goToHomeAnchor("home")}>
              В начало страницы
            </a>
          </li>
          <li>
            <a href="/exercises">Задачи</a>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Portfolio. Все права защищены.</p>
      </div>
    </section>
  );
};

export default Footer;
