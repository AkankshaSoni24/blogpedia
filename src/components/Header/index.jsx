import React from 'react'
import './styles.css'
import Navbar from '../Navbar/Desktop'

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <h3>BLOGPEDIA</h3>
            </div>
            <div className="navbar-container">
                <Navbar/>
            </div>
        </div>
        )
}

export default Header
