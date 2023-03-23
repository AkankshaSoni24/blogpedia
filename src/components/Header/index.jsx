import React from 'react'
import './styles.css'
import Navbar from '../Navbar/Desktop'
import { Link } from "react-router-dom"
import Menu from '../Navbar/Mobile'

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <Link className="main-logo" to="/blogpedia/">{props.title}</Link>
            </div>
            <div className="navbar-container">
                <Navbar />


            </div>
        </div>
    )
}

export default Header
