import { useContext, useEffect, useState } from "react";
import { ProductsData } from "../App";
import Product from "./Product";

// import Product from "./Product";

const Products = () => {
  const produsts = useContext(ProductsData);
  const [isPresed, setIspresed] = useState(1);
  const [productData, setProduct] = useState([]);
  console.log(isPresed);
  useEffect(() => {
    setProduct(produsts);
  }, [produsts]);
  const handleColorChange = (color) => {
    setIspresed(color);
  };
  const handleProductDisplay = (idx) => {
    if (idx === "") {
      setProduct(produsts);
    } else {
      const displayProduct = produsts.filter((data) => data.category === idx);
      setProduct(displayProduct);
    }
  };

  return (
    <div className=" container m-auto mb-[100px]">
      <h1 className="lg:text-4xl text-3xl font-bold mt-[100px] mb-12 text-center sora-font">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-around  gap-6  ">
        <div className="min-w-[240px] flex flex-col gap-6 bg-white p-6 rounded-2xl">
          <button
            onClick={() => {
              handleProductDisplay(""), handleColorChange(1);
            }}
            className={` ${
              isPresed === 1
                ?"border-1 bg-[#9538E2]  text-white": "bg-white text-[#9538E2] border-[#9538E2] border-1"
                
            } sora-font2 font-extrabold text-xl text-start pl-5 rounded-4xl py-3`}
          >
            All Product
          </button>
          <button
            onClick={() => {
              handleProductDisplay("Laptops"), handleColorChange(2);
            }}
            className={` ${
              isPresed === 2
                ? "border-1 bg-[#9538E2]  text-white"
                : "bg-white text-[#9538E2] border-[#9538E2] border-1"
            } sora-font2 font-extrabold text-xl text-start pl-5 rounded-4xl py-3`}
          >
            Laptops
          </button>
          <button
            onClick={() => {
              handleProductDisplay("Phones"), handleColorChange(3);
            }}
            className={` ${
              isPresed === 3
                ? "border-1 bg-[#9538E2]  text-white"
                : "bg-white text-[#9538E2] border-[#9538E2] border-1"
            } sora-font2 font-extrabold text-xl text-start pl-5 rounded-4xl py-3`}
          >
            Phones
          </button>
          <button
            onClick={() => {
              handleProductDisplay("Accessories"), handleColorChange(4);
            }}
            className={` ${
              isPresed === 4
                ? "border-1 bg-[#9538E2]  text-white"
                : "bg-white text-[#9538E2] border-[#9538E2] border-1"
            } sora-font2 font-extrabold text-xl text-start pl-5 rounded-4xl py-3`}
          >
            Accessories
          </button>
          <button
            onClick={() => {
              handleProductDisplay("Smart Watches"), handleColorChange(5);
            }}
            className={` ${
              isPresed === 5
                ? "border-1 bg-[#9538E2]  text-white"
                : "bg-white text-[#9538E2] border-[#9538E2] border-1"
            } sora-font2 font-extrabold text-xl text-start pl-5 rounded-4xl py-3`}
          >
            Smart Watches
          </button>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 w-full">
          {productData.map((product, index) => (
            <Product key={index} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
