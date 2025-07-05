import React from "react";

import styles from "./JSinPractice.module.scss";
import JSPSlider from "./JSPSlider/JSPSlider";
import Tasks from "./Tasks/Tasks";

const JSinPractice = () => {
  return (
    <section className={styles.jsInPractice} id="js-in-practice">
      <h2>
        <span lang="en">JavaScript</span>
        <br /> на практике
      </h2>
      <Tasks />
      <JSPSlider />
    </section>
  );
};

export default JSinPractice;
