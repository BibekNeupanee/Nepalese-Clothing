import React from "react";
import "../Contact/Contact.scss";
import map from "../../images/map.png";

function Contact() {
  return (
    <div className="contact-info">
      <div className="map">
        <h2>Locate us at: </h2>
        <a href="https://goo.gl/maps/sLxbUtHJ5YKc8M2K6" target="_blank">
          <img src={map} alt="Nepalese Clothing" />
        </a>
      </div>
      <div className="contact-detail">
        <div className="contact-number">
          <h2>Contact us at:</h2>
          <a href="https://wa.me/9851332735" target="_blank">
            +977-9851332735
          </a>
          <a href="https://wa.me/9851027016" target="_blank">
            +977-9851027016
          </a>
        </div>
        <div className="email">
          <h2>Email us at:</h2>
          <a href="mailto:nepaleseclothing@outlook.com" target="_blank">
            nepaleseclothing@outlook.com
          </a>
          <a href="mailto:nepaleseclothing98@gmail.com" target="_blank">
            nepaleseclothing95@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
