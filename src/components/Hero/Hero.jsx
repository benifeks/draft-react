import React from "react";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.hero__content}>
        <h1>Ещё учусь,</h1>
        <h2>но кнопки уже нажимаются!</h2>
        <h3> {"(Не судите строго, лучше - наймите!)"}</h3>
      </div>
    </section>
  );
};

export default Hero;
