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
    <div className=" container m-auto">
      <h1 className="lg:text-6xl text-3xl font-bold my-7 text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex lg:flex-row flex-col lg:items-start gap-3 items-center justify-between ">
        <div className="w-[240px] flex flex-col gap-2">
          <button
            onClick={() => handleProductDisplay("")}
            className="btn btn-primary rounded-4xl"
          >
            All Product
          </button>
          <button
            onClick={() => handleProductDisplay("Laptops")}
            className="btn btn-primary rounded-4xl"
          >
            Laptops
          </button>
          <button
            onClick={() => handleProductDisplay("Phones")}
            className="btn btn-primary rounded-4xl"
          >
            Phones
          </button>
          <button
            onClick={() => handleProductDisplay("Accessories")}
            className="btn btn-primary rounded-4xl"
          >
            Accessories
          </button>
          <button
            onClick={() => handleProductDisplay("Smart Watches")}
            className="btn btn-primary rounded-4xl"
          >
            Smart Watches
          </button>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          {productData.map((product, index) => (
            <Product key={index} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
