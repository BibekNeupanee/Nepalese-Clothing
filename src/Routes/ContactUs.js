import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/FooterTop/FooterTop";

function ContactUs() {
  useEffect(() => {
    document.title = 'Contact Us';
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default ContactUs;
