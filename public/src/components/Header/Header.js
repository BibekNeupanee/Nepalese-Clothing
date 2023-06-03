import React from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>Nepalese Clothing</Link>
      </div>
      <ul className="navbar">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about-us"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contact-us"}>Contact Us</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
