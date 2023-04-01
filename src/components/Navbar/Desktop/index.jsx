import { Link } from "react-router-dom";
import "./styles.css";

const DesktopNavbar = (props) => {
  return (
    <div className="nav-container">
      <div className="nav-links">
        <Link className="nav-btn" to="/blogpedia/">
          Home
        </Link>
        <Link className="nav-btn" to="/blogpedia/about">
          About
        </Link>
        <Link className="nav-btn" to="/blogpedia/contact">
          Contact
        </Link>
        <Link className="nav-btn" to="/blogpedia/weather">
          Weather
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavbar;
