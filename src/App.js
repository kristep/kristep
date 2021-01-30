import React, { useState, useEffect } from "react";

import MainContent from "./features/main/MainContent";
import Header from "./features/header/Header";
import Hero from "./features/hero/Hero";

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
      </MainContent>
    </>
  );
}

export default App;
