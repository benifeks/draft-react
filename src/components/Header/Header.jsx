import React from "react";

import "./Header.scss";

import Contacts from "./Contacts/Contacts";
import LeftNav from "./LeftNav/LeftNav";
import LeftNavList from "./LeftNavList/LeftNavList";
import Logo from "./Logo/Logo";
import RightNav from "./RightNav/RightNav";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <Logo className="nav__left--logo" />
        <div className="nav__left--nav">
          <LeftNav />
        </div>
        <div className="nav__left--nav-list">
          <LeftNavList />
        </div>
      </div>
      <div className="nav__right-nav">
        <RightNav />
        <Contacts />
      </div>
    </nav>
  );
};

export default Header;
