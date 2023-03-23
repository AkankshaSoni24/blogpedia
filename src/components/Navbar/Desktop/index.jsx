import React,{useState} from "react";
import menuLinesIcon from "../../../images/menuLinesIcon.svg"
import { Link } from "react-router-dom";
import "./styles.css"

const Navbar = (props) => {
        const [showMenu, setShowMenu] = useState(false)
    
    
        const handleTrigger = () => {
            if (showMenu) {
                console.log("hi i have been called")
                setShowMenu(false)
    
            } else {
                setShowMenu(true)
            }
        }
    
        return (
            <div className="menu-container">
                 <div className="logo-container">
                <Link className="main-logo-mob" to="/blogpedia/">BLOGPEDIA</Link>
               </div>
                 <div className="menu-links">
                        <Link className="nav-btn" to="/blogpedia/">Home</Link>
                        <Link className="nav-btn" to="/blogpedia/about">About</Link>
                        <Link className="nav-btn" to="/blogpedia/contact">Contact</Link>
                        <Link className="nav-btn" to="/blogpedia/weather">Weather</Link>
                    </div>
                <div className="menu-icon ">
                    <img
                        className="menu-icon"
                        src={menuLinesIcon}
                        onClick={handleTrigger}
                        alt="menu" />
                </div>
    
                <div className={`menu-container ${showMenu ? 'show' : 'hidden'}`}>
                    <div className="menu-links ">
               
                       <div> <Link className="menu-btn" to="/blogpedia/">Home</Link></div>
                       <div> <Link className="menu-btn" to="/blogpedia/about">About</Link></div>
                       <div> <Link className="menu-btn" to="/blogpedia/contact">Contact</Link></div>
                       <div> <Link className="menu-btn" to="/blogpedia/weather">Weather</Link></div>
                    </div>
                </div>
            </div>
    
        )
    }

export default Navbar