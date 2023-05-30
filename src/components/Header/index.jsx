import React, { useState } from "react";
import "./styles.css";
import DesktopNavbar from "../Navbar/Desktop";
import MobileNavbar from "../Navbar/Mobile";
import { Link } from "react-router-dom";
import menuLinesIcon from "../../static/images/menuLinesIcon.svg";

const Header = (props) => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleTrigger = () => {
    if (showMenu === false) {
      console.log("hi i have been called");
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  const changeNavBackground = () => {
    if (window.scrollY >= 1) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);
  return (
    <div className={navbarBg ? "header-container active" : "header-container"}>
      <div className="navbar_container">
        <div className="logo-container">
          <Link className="main-logo" to="/blogpedia/">
            {props.title}
          </Link>
        </div>
        <div className="mobile-navbar-container">
          <div className="menu-icon">
            <img
              className="menu-icon-img"
              src={menuLinesIcon}
              onClick={handleTrigger}
              alt="menu"
            />
          </div>
        </div>
        <div className="desktop-navbar-container">
          <DesktopNavbar />
        </div>
      </div>

      <div className="mobile-navbar">{showMenu && <MobileNavbar />}</div>
    </div>
  );
};

export default Header;
