import React from "react";
import "./FooterTop.scss";
import { Link } from "react-router-dom";
import facebook from "../../SVG/facebook.svg";
import instagram from "../../SVG/instagram.svg";

function Footer() {
  return (
    <footer className="footer-top">
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
              <a href="https://wa.me/9851332735" target="_blank">
                +977-9851332735
              </a>
            </li>
            <li className="contact">
              <a href="https://wa.me/9851027016" target="_blank">
                +977-9851027016
              </a>
            </li>
            <span>E-mail us at:</span>

            <li>
              <a href="mailto:nepaleseclothing@outlook.com" target="_blank">
                nepaleseclothing@outlook.com
              </a>
            </li>
            <li>
              <a href="mailto:nepaleseclothing98@gmail.com" target="_blank">
                nepaleseclothing95@gmail.com
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="social">
        <a href="https://www.facebook.com/Nepcloth">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/nepalese_clothing/">
          <img src={instagram} alt="Instagram" />
        </a>
        {/* https://goo.gl/maps/bLmR3erxAd6QHP3Z9 */}
      </div>
    </footer>
  );
}

export default Footer;
