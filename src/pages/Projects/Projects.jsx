import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <nav className={styles.projectsNav}>
        <NavLink to="/projects">🃏 Проекты</NavLink>
        <NavLink to="blackjack">
          ♠️ <span lang="en">Blackjack</span>
        </NavLink>
        <NavLink to="table">📊 Таблица</NavLink>
        <NavLink to="quicknotes">📝 Заметки</NavLink>
      </nav>

      <div className={styles.projectsContainer}>
        <Outlet />
      </div>
    </section>
  );
};

export default Projects;
