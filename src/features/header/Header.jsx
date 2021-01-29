import React from "react";
import Navigation from "../../features/navigation/Navigation";
import { ReactComponent as Logo } from "../../images/logo.svg";

import "./header.scss";
// eslint-disable-next-line
const Header = ({ isExpanded }) => {
  return (
    <header className={isExpanded ? "header header--expanded" : "header"}>
      {!isExpanded ? <Logo className="header__logo" /> : <span></span>}
      <Navigation />
    </header>
  );
};

export default Header;
