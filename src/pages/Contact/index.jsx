import React, { useState } from "react";
import "./styles.css";

import locationIcon from "../../static/images/locationIcon.png";
import darkMailIcon from "../../static/images/svg/darkMailIcon.svg";
import phone from "../../static/images/svg/phone.svg";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  return (
    <div className="contact-container-main">
      <div className="contact-container">
        <div className="contact-details">
          <div className="contact-heading">
            <h1>GET IN TOUCH</h1>
          </div>
          <div className="contact-phoneno contact_flexbox_wrapper">
            <img className="contact-phoneno-img" src={phone} alt="Phone no." />
            <phone />
            +91 8955370140
          </div>
          <div className="contact-email contact_flexbox_wrapper">
            <img
              className="contact-phoneno-img"
              src={darkMailIcon}
              alt="Phone no."
            />
            <darkMailIcon />
            aakankshasoni024@gmail.com
          </div>
          <div className="contact-location contact_flexbox_wrapper">
            <img
              className="contact-location-img"
              src={locationIcon}
              alt="Address:"
            />
            Gulab Bari , Ajmer, Rajasthan{" "}
          </div>
        </div>
        {success && <>Success</>}
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
                placeholder="Your Message"
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
                onSubmit={() => validateForm()}
              />
            </div>
            <input
              type="hidden"
              name="_next"
              value="https://akankshasoni024.github.io/blogpedia/thankyou"
            />
            <input type="hidden" name="_captcha" value="false" />

            <input type="hidden" name="_template" value="table" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
