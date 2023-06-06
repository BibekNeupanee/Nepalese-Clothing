import React, { useMemo } from "react";
import "../FooterBottom/FooterBottom.scss";
import facebook from "../../SVG/facebook.svg";
import instagram from "../../SVG/instagram.svg";

function FooterButtom() {
  return (
    <>
      <div className="social">
        <a href="https://www.facebook.com/Nepcloth">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/nepalese_clothing/">
          <img src={instagram} alt="Instagram" />
        </a>
        https://goo.gl/maps/bLmR3erxAd6QHP3Z9
      </div>
    </>
  );
}

export default FooterButtom;
