import React from "react";
import PropTypes from "prop-types";

const MainContent = ({ children }) => {
  return <main className="main-content">{children}</main>;
};

MainContent.propTypes = {
  children: PropTypes.element,
};

export default MainContent;
