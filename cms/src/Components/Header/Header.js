import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">Nepalese Clothing | CMS</div>

      <ul>
        <li>
          <Link to={"/"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/fabrics"}>Products</Link>
        </li>
        <li>
          <Link to={"/product-types"}>Products Types</Link>
        </li>
        <li>
          <Link to={"/measurements"}>Measurements</Link>
        </li>
        <li>
          <Link to={"/fabrics"}>Fabrics</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
