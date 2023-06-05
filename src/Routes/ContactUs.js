import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/FooterTop/FooterTop";
import Dir from "../components/GoogleMap/Dir";

function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return (
    <>
      <Header />
      <Dir />
      <Footer />
    </>
  );
}

export default ContactUs;
