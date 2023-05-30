import React from "react";
import "./styles.css";
import phoneIcon from "../../static/images/phoneIcon.png";
import mailIcon from "../../static/images/mailIcon.png";
import locationIcon from "../../static/images/locationIcon.png";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <div className="contact-container-main">
      {/* <Header title="BLOGPEDIA" /> */}
      <div className="contact-container">
        <div className="contact-details">
          <div className="contact-heading">
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="contact-phoneno">
            <img
              className="contact-phoneno-img"
              src={phoneIcon}
              alt="Phone no."
            />
            +91 8955370140
          </div>
          <div className="contact-email">
            <img className="contact-email-img" src={mailIcon} alt="Gmail:" />
            aakankshasoni024@gmail.com
          </div>
          <div className="contact-location">
            <img
              className="contact-location-img"
              src={locationIcon}
              alt="Address:"
            />
            Gulab Bari , Ajmer, Rajasthan{" "}
          </div>
        </div>

        <div className="contact-form">
          <div className="contact-form-heading">
            <h1>SAY SOMETHING</h1>
          </div>
          <form
            action="https://formsubmit.co/aakankshasoni024@gmail.com"
            method="post"
          >
            <div className="contact-form-nameinput">
              <input type="text" name="Your Name" placeholder="Your Name" />
            </div>
            <div className="contact-form-email-input">
              <input
                type="email"
                name="Your email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="contact-form-message-input">
              <textarea
                className="contact-form-message-input"
                type="text"
                name="Your Message"
                placeholder="YourMessage"
                cols="40"
                rows="5"
              ></textarea>
            </div>
            <div className="contact-form-send-input ">
              <input
                className="contact-form-send-input "
                type="submit"
                name="Send"
                value="Send"
              />
            </div>
            <input
              type="hidden"
              name="_next"
              value="https://akankshasoni024.github.io/blogpedia/contact"
            />

            <input type="hidden" name="_template" value="table" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
