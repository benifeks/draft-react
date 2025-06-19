import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <nav className={styles.projectsNav}>
        <NavLink to="/projects">🃏 Homeprojects</NavLink>
        <NavLink to="blackjack">🃏 Blackjack</NavLink>
        <NavLink to="table">📊 Table</NavLink>
      </nav>

      <div className={styles.projectsContainer}>
        <Outlet />
      </div>
    </section>
  );
};

export default Projects;
