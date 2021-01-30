import React from "react";
import PropTypes from "prop-types";

import "./divider.scss";

const Divider = ({ dividerText }) => {
  return (
    <h2 className="divider" id={dividerText}>
      {dividerText}
    </h2>
  );
};

Divider.propTypes = {
  dividerText: PropTypes.string,
};
export default Divider;
