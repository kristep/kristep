import React, { useState } from "react";

import MainContent from "./features/main/MainContent";
import Header from "./features/header/Header";
import Hero from "./features/hero/Hero";

function App() {
  // eslint-disable-next-line
  const [isExpanded, setIsExpanded] = useState(true);

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
