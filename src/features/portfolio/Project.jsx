import React from "react";
import PropTypes from "prop-types";

import Button from "../../components/button/Button";

import "./project.scss";

const Project = ({ image, title, href, children }) => {
  return (
    <div className="project">
      <img src={image} alt="" className="project__image" />
      <div className="project__info">
        <h3 className="project__title">{title}</h3>
        <div className="project__description">{children}</div>
        <Button>
          <a
            className="project__link"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a>
        </Button>
      </div>
    </div>
  );
};

Project.propTypes = {
  image: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Project;
