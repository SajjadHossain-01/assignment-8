import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../App";
import ShowDetail from "./ShowDetail";

const ProductDetail = () => {
  const [prodect, setProduct] = useState([]);
  const products = useContext(ProductsData);
  const productid = useParams("productId");
  const id = productid.productId;
  useEffect(() => {
    const displayProduct = products.filter((data) => data.product_id === id);
    setProduct(displayProduct);
  }, [products,id]);
  return (
    <div>
      <div className="bg-[#9538E2] pt-11 pb-36">
        <h1 className="text-4xl font-semibold text-center text-white">
          Product Details
        </h1>
        <p className="text-center text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="-mt-16 lg:w-[1280px]  m-auto">
        {prodect.map((produt, index) => (
          <ShowDetail key={index} prodect={produt}></ShowDetail>
        ))}
      </div>
    </div>
  );
};

ProductDetail.propTypes = {};

export default ProductDetail;
