import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h2>
        <Link to="/projects">Projects/</Link>
      </h2>
      <h2>
        <Link to="/contact">Contact/</Link>
      </h2>
      <h2>
        <a
          href="https://docs.google.com/document/d/1DV-lUf8bv02Be29jFoH-4b_TUGkMLsYCSMpRE5BTtvQ/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume/
        </a>
      </h2>
      <h2>
        <a
          href="https://www.github.com/brandononeal"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub/
        </a>
      </h2>
      <h2>
        <a
          href="https://www.linkedin.com/in/brandonaoneal"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn/
        </a>
      </h2>
      <h2>
        <a
          href="https://www.wyzant.com/tutors/bran"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wyzant/
        </a>
      </h2>
    </div>
  );
}

export default Home;
