import React from "react";
import "./FooterTop.scss";
import { Link } from "react-router-dom";
import FooterButtom from "../FooterBottom/FooterBottom";

function Footer() {
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
          <h1>Contact</h1>
          <ul>
            <li className="contact">
              <a href="https://wa.me/9851332735">+977-9851332735</a>
            </li>
            <li className="contact">
              <a href="https://wa.me/9851027016">+977-9851027016</a>
            </li>
            <span>E-mail us at:</span>

            <li>
              <a href="mailto:nepaleseclothing@outlook.com">
                nepaleseclothing@outlook.com
              </a>
            </li>
            <li>
              <a href="mailto:nepaleseclothing98@gmail.com">
                nepaleseclothing98@gmail.com
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <FooterButtom />
    </footer>
  );
}

export default Footer;
