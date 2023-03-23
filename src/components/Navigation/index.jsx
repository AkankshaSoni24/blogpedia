import React from 'react'
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import BlogDetails from '../../pages/BlogDetails';
import Weather from '../../pages/Weather';

import {
    Routes,
    Route
} from "react-router-dom";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/blogpedia/" element={<Home />} />
            <Route path="/blogpedia/about" element={<About />} />
            <Route path="/blogpedia/contact" element={<Contact />} />
            <Route path="/blogpedia/blog" element={<BlogDetails />} />
            <Route path="/blogpedia/weather" element={<Weather />} />
        </Routes>
    )
}

export default Navigation