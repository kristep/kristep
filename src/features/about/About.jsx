import React from "react";
// import PropTypes from "prop-types";
import profile from "../../images/profile.jpg";

import "./about.scss";

const About = () => {
  return (
    <article className="about">
      <img src={profile} alt="" className="about__photo" />

      <div className="about__description">
        <section className="about__section">
          <h2 className="about__title">Who I am?</h2>
          <p className="about__paragraph">
            I am Kristina - fast growing junior frontend developer (also
            interested in backend), living in a beautiful little country, called
            Lithuania.
          </p>
          <p className="about__paragraph">
            Before I found myself in programming, I was a pharmacist. Takeaways
            from that - improved personal skills, which are also important in
            programming -<span className="about__brighten-span"> accuracy</span>
            ,<span className="about__brighten-span"> attention to detail</span>,
            <span className="about__brighten-span">
              {" "}
              attention to client&apos;s needs
            </span>
            , <span className="about__brighten-span">patience</span>.
          </p>
          <p className="about__paragraph">
            I am organized, persistent and motivated to join a development team
            and collaborate on general goals of the company and grow as a
            developer as fast as possible.
          </p>
        </section>
        <section className="about__section">
          <h2 className="about__title">What can I do?</h2>
          <ul className="about__skills-list">
            <li className="about__skills-list-item">
              HTML5, CSS3, SASS, Bootstrap
            </li>
            <li className="about__skills-list-item">JavaScript (ES6)</li>
            <li className="about__skills-list-item">React</li>
            <li className="about__skills-list-item">Python (Flask)</li>
            <li className="about__skills-list-item">
              Work as a team member and individually
            </li>
            <li className="about__skills-list-item">
              Learn new subjects/improve skills fast and productive
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
};

export default About;
