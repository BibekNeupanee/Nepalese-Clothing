import React from "react";
import "../Products/Products.scss";

function Products() {
  const products = [
    {
      image: "https://pbs.twimg.com/media/C2XlNefUcAAxhn4.jpg",
      category: "Tshirt",
      title: "Men's Shinning Stonewash T-Shirt",
    },
    {
      image: "https://pbs.twimg.com/media/C2XlNefUcAAxhn4.jpg",
      category: "Tshirt",
      title: "Men's Shinning Stonewash T-Shirt",
    },
    {
      image: "https://pbs.twimg.com/media/C2XlNefUcAAxhn4.jpg",
      category: "Tshirt",
      title: "Men's Shinning Stonewash T-Shirt",
    },
    {
      image: "https://pbs.twimg.com/media/C2XlNefUcAAxhn4.jpg",
      category: "Tshirt",
      title: "Men's Shinning Stonewash T-Shirt",
    },
    {
      image: "https://pbs.twimg.com/media/C2XlNefUcAAxhn4.jpg",
      category: "Tshirt",
      title: "Men's Shinning Stonewash T-Shirt",
    },
    {
      image: "https://pbs.twimg.com/media/C2XlNefUcAAxhn4.jpg",
      category: "Tshirt",
      title: "Men's Shinning Stonewash T-Shirt",
    },
  ];

  return (
    <section className="products">
      {products.map((product, i) => (
        <a href="#" className="product" key={i}>
          <img src={product.image} alt={product.category} />
          <div className="category">{product.category}</div>
          <div className="title">{product.title}</div>
        </a>
      ))}
    </section>
  );
}

export default Products;
