import React from "react";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <a href="/" className={styles.nav__leftNavLogo} lang="en">
      <span>🏠</span>Home
    </a>
  );
};

export default Logo;
