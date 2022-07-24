import React from "react";
import "./styles.css"

import {
    Link
} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/blogpedia/">Home</Link>
            <Link to="/blogpedia/about">About</Link>
            <Link to="/blogpedia/contact">Contact</Link>
        </div>
    )
}

export default Navbar