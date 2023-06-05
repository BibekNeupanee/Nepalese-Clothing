import React from "react";
import "./FooterTop.scss";
import { Link } from "react-router-dom";
import FooterButtom from "../FooterBottom/FooterBottom";

function Footer() {
  const contactUs = {
    Header: "Contact",
    links: [
      "+977-9851027016",
      "+977-9851332735",
      "+977-01-5917016",
      "nepaleseclothing@outlook.com",
      "nepaleseclothing98@gmail.com",
    ],
  };

  return (
    <footer>
      <ul>
        <li className="left-footer">
          <h1 className="logo">
            <Link to={"/"}>Nepalese Clothing</Link>
          </h1>
          <h1 className="location">Thamel, Kathmandu, Nepal</h1>
        </li>
        <li>
          <h1>Company</h1>
          <ul>
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
          </ul>
        </li>
        <li>
          <h1>Customer Service</h1>
          <ul>
            <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </li>
        <li>
          <h1>{contactUs.Header}</h1>
          <ul>
            {contactUs.links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </li>
      </ul>
      <FooterButtom />
    </footer>
  );
}

export default Footer;
