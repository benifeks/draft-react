import React from "react";
import { BsFacebook, BsTelegram } from "react-icons/bs";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <ul className="contacts">
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
  );
};

export default Contacts;
