import React from "react";
import './styles.css'
import image1 from '../../images/image1.png'
import Header from "../../components/Header";

const About = () => {
    return (
        <div className="aboutus-container">
        <Header title="BLOGPEDIA"/>
            <div className="about-heading "><h1>ABOUT US</h1></div>
            <div className="about-desc">
                <div className="about-img-cont about-main">
                    <img className="about-image" src={image1} alt="img" />
                </div>
                <div className="about-data about-main"><p>I am<b> Akanksha Soni</b>.Currently I am pursuing Diploma  3<sup>rd</sup> year in Computer Science from Birla Technical Training Institute Pilani with an overall CGPA as 9.73 .<br></br>
                    In my academic life, I worked with various languages like  React.js, HTML, CSS, JAVASCRIPT, C, Python, MYSQL and PHP . <br></br>
                    In addition to my dedication to college projects I was involved in creating various projects like my own website ,several other tiny projects.</p></div>
            </div>

        </div>
    )
}

export default About