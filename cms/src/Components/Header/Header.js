import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="logo">Nepalese Clothing | CMS</div>

      <ul>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Product Types</a>
        </li>
        <li>
          <a href="#">Measurement</a>
        </li>
        <li>
          <a href="#">Fabric</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
