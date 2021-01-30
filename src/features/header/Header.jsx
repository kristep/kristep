import React from "react";
import PropTypes from "prop-types";

import Navigation from "../../features/navigation/Navigation";
import { ReactComponent as Logo } from "../../images/logo.svg";

import "./header.scss";

const Header = ({ isExpanded }) => {
  return (
    <header className={isExpanded ? "header header--expanded" : "header"}>
      {!isExpanded ? <Logo className="header__logo" /> : <span></span>}
      <Navigation />
    </header>
  );
};

Header.propTypes = {
  isExpanded: PropTypes.bool,
};

export default Header;
