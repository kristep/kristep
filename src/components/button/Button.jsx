import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
