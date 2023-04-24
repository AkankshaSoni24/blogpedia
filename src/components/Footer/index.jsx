import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import mailIcon from "../../images/mailIcon.png";
import instagramIcon from "../../images/instagramIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";
import facebookIcon from "../../images/facebookIcon.png";
import githubIcon from "../../images/githubIcon.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="main-footer">
        <div className="footer-details ">
          <div className="footer-logo footer-heading">BLOGPEDIA</div>
          <div className="footer-logo-details">
            Gulab Bari ,Ajmer, Rajasthan
          </div>
        </div>
        <div className="footer-company">
          <div className="footer-company-heading footer-heading">Company</div>
          <li>
            <Link className="footer-link" to="/blogpedia/about">
              About us
            </Link>
          </li>
          <li>
            {" "}
            <Link className="footer-link" to="/blogpedia/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="footer-link" to="/blogpedia/about">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="footer-link" to="/blogpedia/about">
              Copyright policy
            </Link>
          </li>
        </div>
        <div className="footer-Read">
          <div className="footer-Read-heading footer-heading">Read</div>
          <li>
            <Link className="footer-link" to="/blogpedia/">
              Research Blogs
            </Link>
          </li>
          <li>
            <Link className="footer-link" to="/blogpedia/">
              Technology Blogs
            </Link>
          </li>
          <li>
            <Link className="footer-link" to="/blogpedia/">
              New
            </Link>
          </li>
          <li>
            <Link className="footer-link" to="/blogpedia/">
              Notes
            </Link>
          </li>
        </div>
      </div>
      <div className="footer-follow-us">
        <div className="contact-email">
          <a href="mailto:aakankshasoni024@gmail.com">
            {" "}
            <img
              className="contact-email-img followus-icon"
              src={mailIcon}
              alt="Gmail:"
            />
          </a>
        </div>
        <div className="contact-instagram">
          <a>
            <img
              className="contact-instagramicon-img followus-icon"
              src={instagramIcon}
              alt="Address:"
            />{" "}
          </a>
        </div>
        <div className="contact-linkedin">
          <a href="https://www.linkedin.com/in/akanksha-soni-cs/">
            <img
              className="contact-linkedinicon-img followus-icon"
              src={linkedinIcon}
              alt="Address:"
            />{" "}
          </a>
        </div>
        <div className="contact-facebook">
          <a>
            <img
              className="contact-facebookicon-img followus-icon"
              src={facebookIcon}
              alt="Address:"
            />{" "}
          </a>
        </div>
        <div className="contact-github">
          <a href="https://github.com/akankshasoni024">
            {" "}
            <img
              className="contact-twittericon-img followus-icon"
              src={githubIcon}
              alt="Address:"
            />{" "}
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>copyright. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
