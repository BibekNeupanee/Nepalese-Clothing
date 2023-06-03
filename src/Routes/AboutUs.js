import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/FooterTop/FooterTop";

function AboutUs() {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default AboutUs;
