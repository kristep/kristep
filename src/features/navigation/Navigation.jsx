import React from "react";
import PropTypes from "prop-types";

import "./navigation.scss";

const Navigation = ({ visibleSection }) => {
  const links = ["home", "about", "portfolio", "contact"];
  return (
    <nav className="navigation">
      {links.map((link, i) => (
        <a
          key={i}
          className={`navigation__link ${visibleSection === link && "active"}`}
          href={`#${link}`}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}
    </nav>
  );
};

Navigation.propTypes = {
  visibleSection: PropTypes.string,
};

export default Navigation;
