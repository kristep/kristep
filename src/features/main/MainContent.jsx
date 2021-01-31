import React from "react";
import PropTypes from "prop-types";

import "./mainContent.scss";

const MainContent = ({ children }) => {
  return <main className="main-content">{children}</main>;
};

MainContent.propTypes = {
  children: PropTypes.array,
};

export default MainContent;
