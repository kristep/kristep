import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Logo } from "../../images/logo.svg";
import Button from "../../components/button/Button";

import "./hero.scss";

const Hero = ({ isExpanded }) => {
  return (
    <div className="hero" id="home">
      <section className="hero__content">
        {isExpanded && <Logo className="hero__logo" />}
        <h1 className="hero__title">front-end developer</h1>
        <figure className="hero__quote">
          <q>
            I am not a great programmer, I am just a good programmer with great
            habits.
          </q>
          <figcaption className="hero__quote-author">Kent Beck</figcaption>
        </figure>
        <Button>
          <a className="hero__link" href="#contact">
            Contact me
          </a>
        </Button>
      </section>
    </div>
  );
};

Hero.propTypes = {
  isExpanded: PropTypes.bool,
};

export default Hero;
