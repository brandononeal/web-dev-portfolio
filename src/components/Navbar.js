import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <h2>Brandon O'Neal</h2>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </div>
  );
}

export default Navbar;
