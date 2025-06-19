import React from "react";

import Contacts from "./Contacts/Contacts";
import styles from "./Header.module.scss";
import LeftNav from "./LeftNav/LeftNav";
import Logo from "./Logo/Logo";
import RightNav from "./RightNav/RightNav";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__left}>
        <Logo className={styles.nav__logo} />
        <div className={styles.nav__leftNav}>
          <LeftNav />
        </div>
      </div>
      <div className={styles.nav__rightNav}>
        <RightNav />
        <Contacts />
      </div>
    </nav>
  );
};

export default Header;
