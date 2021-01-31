import React, { useState, useEffect, useRef } from "react";

import { getDimensions } from "./utils/getDimensions";

import MainContent from "./features/main/MainContent";
import Header from "./features/header/Header";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Portfolio from "./features/portfolio/Portfolio";
import Divider from "./components/divider/Divider";
import Parallax from "./components/parallax/Parralax";
import Contact from "./features/contact/Contact";
import Footer from "./features/footer/Footer";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [visibleSection, setVisibleSection] = useState("home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "home", ref: homeRef },
    { section: "about", ref: aboutRef },
    { section: "portfolio", ref: portfolioRef },
    { section: "contact", ref: contactRef },
  ];

  // handling shrinking of header
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

  // handling scrolling to element
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      const selected = sectionRefs.find(({ section, ref }) => {
        const element = ref.current;
        const { offsetBottom, offsetTop } = getDimensions(element);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, [visibleSection]);

  return (
    <>
      <Header isExpanded={isExpanded} visibleSection={visibleSection} />

      <MainContent>
        <div ref={homeRef}>
          <Hero isExpanded={isExpanded} />
        </div>

        <div ref={aboutRef}>
          <Divider dividerText={"about"} />
          <section className="main-content__section">
            <About />
          </section>
        </div>

        <div ref={portfolioRef}>
          <Divider dividerText={"portfolio"} />
          <Parallax />
          <section className="main-content__section">
            <Portfolio />
          </section>
        </div>

        <div ref={contactRef}>
          <Divider dividerText={"contact"} />
          <Contact />
        </div>
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
