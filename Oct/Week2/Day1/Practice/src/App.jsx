
import React from "react";
import Home from "./Home";
import About from "./About";
import Card from "./Card";

function App() {
  let a;

  let products = [
    {
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      title: "Headphones",
      desc: "This is a wireless headphone",
      price: 1500,
    },
    {
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      title: "Watch",
      desc: "This is a stylish wrist watch",
      price: 2500,
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      title: "Shoes",
      desc: "This is a red sports shoe",
      price: 3000,
    },
    {
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
      title: "Camera",
      desc: "This is a digital camera",
      price: 12000,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Product Store
      </h1>

     <Home
  num={products.length}
  obj={{ name: "Product Store", age: 4 }}
/>

<About children={"Welcome to Our Product Store"}>
  Explore our latest products at the best prices.
  <p>Find headphones, watches, shoes, and cameras in our collection.</p>
</About>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
