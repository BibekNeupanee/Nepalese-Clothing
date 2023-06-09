import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/FooterTop/FooterTop";
import Contact from "../components/Contact/Contact";

function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactUs;
