import React, { useState, useEffect } from "react";

import MainContent from "./features/main/MainContent";
import Header from "./features/header/Header";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Portfolio from "./features/portfolio/Portfolio";
import Divider from "./components/divider/Divider";
import Parallax from "./components/parallax/Parralax";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const scroll = () => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };
    document.addEventListener("scroll", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      <Header isExpanded={isExpanded} />
      <MainContent>
        <Hero isExpanded={isExpanded} />
        <Divider dividerText={"about"} />
        <section className="main-content__section">
          <About />
        </section>
        <Divider dividerText={"portfolio"} />
        <Parallax />
        <section className="main-content__section">
          <Portfolio />
        </section>
        <Divider dividerText={"contact"} />
      </MainContent>
    </>
  );
}

export default App;
