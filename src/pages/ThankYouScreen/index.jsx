import React from "react";
import "./styles.css";

import locationIcon from "../../static/images/locationIcon.png";
import darkMailIcon from "../../static/images/svg/darkMailIcon.svg";
import phone from "../../static/images/svg/phone.svg";

const thankyou = () => {
  return (
    <div className="content">
      <div className="wrapper-1">
        <div className="wrapper-2">
          <h1>Thank you !</h1>
          <p>Your submission has been recieved.</p>
          <p> We will be in touch and contact you soon </p>
          <button className="go-home">
            <a href="/blogpedia/home">go home</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default thankyou;
