import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "../Navbar/Desktop";
import { Link } from "react-router-dom";
import Menu from "../Navbar/Mobile";

const Header = (props) => {
  const [navbarBg, setNavbarBg] = useState(false);
  const changeNavBackground = () => {
    if (window.scrollY >= 58) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);
  return (
    <div
      className={navbarBg ? "header-container active" : "header-container"}
      id="topNavbar"
    >
      <div className="logo-container">
        <Link className="main-logo" to="/blogpedia/">
          {props.title}
        </Link>
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
