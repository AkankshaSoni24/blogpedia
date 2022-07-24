import React from "react";
import './styles.css'
import image1 from '../../images/image1.png'

const About=()=>{
    return(
        <div className="aboutus-container">
            <div className="about-heading "><h1>ABOUT US</h1></div>
            <div className="about-img-cont about-main"><img className="about-image" src={image1} alt="img"/>
            </div>
            <div className="about-data about-main">I am Akanksha Soni.Currently I am pursuing Diploma  3<sup>rd</sup> year in Computer Science from Birla Technical Training Institute Pilani with an overall CGPA as 9.73 .{'\n'} 
            In my academic life, I worked with various languages like  React.js, HTML, CSS, JAVASCRIPT, C, Python, MYSQL and PHP . {'\n'} 
            In addition to my dedication to college projects I was involved in creating various projects like my own website ,several other tiny projects.</div>    
        </div>
    )
}

export default About