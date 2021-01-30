import React from "react";
import Project from "./Project";
import cocktail from "../../images/cocktail.png";
import mole from "../../images/mole.png";
import movies from "../../images/movies.png";
import wally from "../../images/wally.png";

import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Project
        image={cocktail}
        href="https://kristep.github.io/coctails/"
        title="Find Your Cocktail"
      >
        <>
          <p>
            Vanilla <span>JavaScript</span> (ES6) web app, made using JavaScript{" "}
            <span>modules</span>, Webpack.
          </p>
          <p>Here You can find almost all cocktails by name or ingredients.</p>
          <p>
            Data of coctails from{" "}
            <a
              className="project__link project__link--underlined"
              href="https://www.thecocktaildb.com"
            >
              TheCocktailDB API
            </a>
          </p>
        </>
      </Project>
      <Project
        image={mole}
        href="https://kristep.github.io/feed-a-mole/"
        title="'Feed a mole' game"
      >
        <p>
          Small <span>JavaScript</span> game, made after one of the
          &apos;Frontend Masters&apos; courses.
        </p>
      </Project>
      <Project
        image={movies}
        href="https://kristep.github.io/movies/"
        title="Movies library"
      >
        <>
          <p>
            Movie search web app, made with <span>React</span> Hooks.
          </p>
          <p>
            Data of movies from{" "}
            <a
              className="project__link project__link--underlined"
              href="https://developers.themoviedb.org/3"
            >
              The Movie Database API
            </a>
          </p>
        </>
      </Project>
      <Project
        image={wally}
        href="https://tracker-wally.herokuapp.com/"
        title="Wally - expense tracker"
      >
        <p>
          Web application, made as Harvard SC50 course final project, using{" "}
          <span>Python</span> Flask framework
        </p>
      </Project>
    </div>
  );
};

export default Portfolio;
