import React from 'react'
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import BlogDetails from '../../pages/BlogDetails';

import {
    Routes,
    Route
} from "react-router-dom";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogDetails />} />
        </Routes>
    )
}

export default Navigation