import React from "react";
import "../Products/Products.scss";
import useFetch from "../../hooks/useFetch";

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

  const fabrics = useFetch("http://localhost:3000/")?.fabric || [];

  console.log(fabrics);

  return (
    <>
      <h5>Popular Products</h5>
      <section className="products">
        {products.map((product, i) => (
          <a href="#" className="product" key={i}>
            <img src={product.image} alt={product.category} />
            {fabrics.map((fabric) => (
              <div className="category">{fabric.name}</div>
            ))}
            <div className="title">{product.title}</div>
          </a>
        ))}
      </section>
    </>
  );
}

export default Products;
