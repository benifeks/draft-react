import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-section">
            <h3>Контакты</h3>
            <ul className="contact-list">
              <li>
                <a href="mailto:your.email@example.com" className="contact-link">
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername" className="contact-link">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourprofile" className="contact-link">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Социальные сети</h3>
            <ul className="social-list">
              <li>
                <a href="https://twitter.com/yourusername" className="social-link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/yourusername" className="social-link">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Навигация</h3>
            <ul className="nav-list">
              <li>
                <a href="/lab" className="nav-link">
                  Лаборатория
                </a>
              </li>
              <li>
                <a href="/exercises" className="nav-link">
                  Задачи
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  Обо мне
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Portfolio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
