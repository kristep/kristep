import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ children, type = "button" }) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
};

export default Button;
