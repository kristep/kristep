import React from "react";

import "./footer.scss";

const Footer = () => {
  const getCyrrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__social-media">
          <a
            href="https://www.linkedin.com/in/kristina-stepanaviciene-b529831a6"
            target="blank"
            className="footer__social-media-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/kristep"
            target="blank"
            className="footer__social-media-link"
          >
            <i className="fab fa-github-square"></i>
          </a>
        </div>
        <p className="footer__copyright">
          &copy; <span className="footer__date">{getCyrrentYear()}</span>{" "}
          KriStep All Rights Reserved
        </p>
      </div>

      <p className="footer__address">
        Kristina Stepanaviciene <br /> Kaunas, Lithuania <br />
        kr.stepanaviciene@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
