import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>
        <span>$</span> welcome to my <span>portfolio</span>
      </h1>
      <br />
      <h2>
        check out some of my <Link to="/projects">projects</Link>
      </h2>
      <h2>
        and feel free to <Link to="/contact">reach out</Link>
      </h2>
    </div>
  );
}

export default Home;
