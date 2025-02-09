import { useContext, useEffect, useState } from "react";
import { ProductsData } from "../App";
import Product from "./Product";

// import Product from "./Product";

const Products = () => {
  const produsts = useContext(ProductsData);
  const [productData, setProduct] = useState([]);
  useEffect(() => {
    setProduct(produsts);
  }, [produsts]);
  const handleProductDisplay = (idx) => {
    if (idx === "") {
      setProduct(produsts);
    } else {
      const displayProduct = produsts.filter((data) => data.category === idx);
      setProduct(displayProduct);
      console.log(productData);
    }
  };

  return (
    <div className=" container m-auto mb-[100px]">
      <h1 className="lg:text-4xl text-3xl font-bold mt-[100px] mb-12 text-center sora-font">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex lg:flex-row flex-col lg:items-start items-center  gap-6  ">
        <div className="min-w-[240px] flex flex-col gap-6 bg-white p-6 rounded-2xl">
          <button
            onClick={() => handleProductDisplay("")}
            className=" bg-[#9538E2] text-white sora-font2 font-extrabold text-xl text-start pl-5 rounded-4xl py-3"
          >
            All Product
          </button>
          <button
            onClick={() => handleProductDisplay("Laptops")}
            className="bg-[#9538E2] text-white sora-font2 font-extrabold text-xl text-start pl-5 rounded-4xl py-3"
          >
            Laptops
          </button>
          <button
            onClick={() => handleProductDisplay("Phones")}
            className="bg-[#9538E2] text-white sora-font2 font-extrabold text-xl text-start pl-5 rounded-4xl py-3"
          >
            Phones
          </button>
          <button
            onClick={() => handleProductDisplay("Accessories")}
            className="bg-[#9538E2] text-white sora-font2 font-extrabold text-xl text-start pl-5 rounded-4xl py-3"
          >
            Accessories
          </button>
          <button
            onClick={() => handleProductDisplay("Smart Watches")}
            className="bg-[#9538E2] text-white sora-font2 font-extrabold text-xl text-start pl-5 rounded-4xl py-3"
          >
            Smart Watches
          </button>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {productData.map((product, index) => (
            <Product key={index} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
