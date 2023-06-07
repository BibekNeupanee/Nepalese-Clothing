import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Footer from "../../components/FooterTop/FooterTop";
import Carousel from "../../components/Carousel/Carousel";
import '../Home/Home.scss'

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const data = [
    {
      imgUrl:
        "https://sf2.mariefranceasia.com/wp-content/uploads/sites/7/2016/05/gettyimages-529862780-616x410.jpg",
      textContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan vehicula lectus",
    },
    {
      imgUrl:
        "https://www.atlasandboots.com/wp-content/uploads/2019/05/eiger-most-beautiful-mountains-in-the-world.jpg",
      textContent:
        "Cras est diam, maximus sit amet est nec, fringilla pharetra risus",
    },
    {
      imgUrl:
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/swiss-alps.jpg",
      textContent:
        "Integer nec facilisis elit, et aliquet enim. Aliquam eu nunc et odio facilisis bibendum",
    },
    {
      imgUrl:
        "https://media.cnn.com/api/v1/images/stellar/prod/220203135111-mount-everest-2020-restricted.jpg?c=16x9&q=h_720,w_1280,c_fill",
      textContent:
        "Nullam tempus tempus massa, ut posuere risus feugiat non. Aliquam erat volutpat",
    },
  ];

  return (
    <>
      <Header />
      <div className="slider-container">
        <Carousel data={data} />
      </div>
      <Products />
      <Footer />
    </>
  );
}

export default Home;
