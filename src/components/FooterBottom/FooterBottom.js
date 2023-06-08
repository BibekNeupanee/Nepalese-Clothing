import React from "react";
import "../FooterBottom/FooterBottom.scss";

function FooterButtom() {
  const date = new Date();
  return (
    <>
      <footer className="footer-bottom">
        <div className="copy-right">
          &copy; {date.getFullYear()} Nepalese Clothing. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default FooterButtom;
