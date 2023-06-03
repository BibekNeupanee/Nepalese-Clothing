import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Footer from "../components/FooterTop/FooterTop";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default Home;
