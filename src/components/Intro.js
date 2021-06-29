import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/home");
  }, 2500);

  return (
    <div className="Home">
      <div className="typewriter">
        <div className="typewriter-text">
          <span>$</span> cd portfolio
        </div>
      </div>
    </div>
  );
}

export default Home;
