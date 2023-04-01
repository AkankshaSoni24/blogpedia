import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const MobileNavbar = (showMenu) => {
  return (
    <div className={`menu-container ${showMenu ? "show" : "hidden"}`}>
      <div className="menu-links ">
        <div>
          <Link className="menu-btn" to="/blogpedia/">
            Home
          </Link>
        </div>
        <hr />
        <div>
          <Link className="menu-btn" to="/blogpedia/about">
            About
          </Link>
        </div>
        <hr />
        <div>
          <Link className="menu-btn" to="/blogpedia/contact">
            Contact
          </Link>
        </div>
        <hr />
        <div>
          <Link className="menu-btn" to="/blogpedia/weather">
            Weather
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
