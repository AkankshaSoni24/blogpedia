import React from "react";
import "./styles.css";
import image1 from "../../static/images/image1.png";
import aboutbackground from "../../static/images/aboutbackground.png";
import aboutTopImg from "../../static/images/aboutTopImg.png";

import Header from "../../components/Header";

const About = () => {
  return (
    <div className="aboutusContainer">
      <div className="backgroundImageContainer">
        <img src={aboutbackground} alt="" />
      </div>
      <div className="topSection">
        <div className="topImage">
          <div className="topTextWrapper">
            <div className="aboutHeading">About Blogpedia</div>
            <div className="aboutContent">
              At Blogpedia, we believe that sharing our thoughts, experiences,
              knowledge can inspire and connect us with others in meaningful
              way.<br></br>
              this website shows blogs about technology, research etc, live real
              time weather forecast, also aiming for new features like notes in
              future.<br></br>
            </div>
          </div>
          <img src={aboutTopImg} alt="" />
        </div>
      </div>
      <div className="aboutAuthorSection">
        <h1>Meet The Team...</h1>
        <u>
          <h3>Akanksha Soni</h3>
        </u>

        <p>
          I am<b> Akanksha Soni</b>, and I am currently in my third year of
          Diploma in Computer Science from Birla Technical Training Institute,
          Pilani.<br></br>
          <br></br> Throughout my academic journey, I have gained experience in
          working with a variety of programming languages, including React.js,
          Next.js, HTML, CSS, JavaScript, C, Python, MySQL, and PHP.
          {/* Apart from my commitment to college projects, I have also undertaken personal
          initiatives such as developing my own website and completing several
          other small-scale projects. */}
        </p>
        <u>
          <h3>Himani Gahlot</h3>
        </u>

        <p>
          I am<b> Himani Gahlot </b>, currently doing my diploam in computer
          Science from BTTI, Pilani.<br></br>
          <br></br> In 10<sup>th</sup> grade, I achieved an impressive score of
          91.40%, reflecting my commitment to being a punctual student. I always
          strive to enhance my skills and abilities.
        </p>
      </div>
    </div>
  );
};

export default About;
