import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";

import "./hero.scss";
// eslint-disable-next-line
const Hero = ({ isExpanded }) => {
  return (
    <div className="hero">
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
        <button className="btn btn_contact">Contact me</button>
      </section>
    </div>
  );
};

export default Hero;
