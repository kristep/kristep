import React from "react";

import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <a className="navigation__link active" href="index.html">
        Home
      </a>
      <a className="navigation__link" href="#about">
        About
      </a>
      <a className="navigation__link" href="#portfolio">
        Portfolio
      </a>
      <a className="navigation__link" href="#contact">
        Contact
      </a>
    </nav>
  );
};

export default Navigation;
