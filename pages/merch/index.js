import React, { useState } from "react";
import { Product, Input } from "@/components";

const data = [
  {
    price: "3AM",
    name: "GORRO",
    img: "/assets/images/1.png",
    url: "https://xclusivemerchan.com/producto/gorro-3am",
  },
  {
    price: "3AM",
    name: "HOODIE",
    img: "/assets/images/13.png",
    url: "https://xclusivemerchan.com/producto/sudera-con-capucha-3am",
  },
  {
    price: "3AM",
    name: "CAMISETA",
    img: "/assets/images/27.png",
    url: "https://xclusivemerchan.com/producto/camiseta-negra-3am",
  },
];

const Merch = () => {
  const [filter, setFilter] = useState("");
  const filteredData = data.filter(
    (product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.price.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="bg-black">
      <div className="lg:w-9/12 mx-auto">
        <video
          src="/assets/video/gift.mp4"
          autoPlay
          muted
          loop
          className="w-full"
        ></video>
      </div>
      <div className="lg:w-9/12 mx-auto py-20 px-10">
        <Input
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        />
        <div className="flex flex-wrap py-10 justify-between">
          {filteredData.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merch;
