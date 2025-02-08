import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AddedProduct, AddedProductWishlist } from "../App";
const ShowDetail = ({ prodect }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedWishlist, setIsAddedWishList] = useState(false);
  const handleAddedProduct = useContext(AddedProduct);
  const handleAddedProductwishlist = useContext(AddedProductWishlist);
  const handleAddToCart = () => {
    if (!isAdded) {
      handleAddedProduct(prodect);
    }
  };
  const handleAddTowishlist = () => {
    if (!isAddedWishlist) {
      handleAddedProductwishlist(prodect);
    }
  };
  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = prodect;
  return (
    <div>
      <div className="hero bg-base-200 rounded-4xl">
        <div className="hero-content flex-col lg:flex-row lg:gap-7 bg-white rounded-4xl">
          <div className="lg:w-[424px] h-full bg-base-200 p-7 ">
            <img src={product_image} className=" object-fill rounded-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">{product_title}</h1>
            <p className="py-6 text-2xl font-medium">Price: ${price}</p>
            <div>
              <button className="btn btn-sm btn-active bg-[#309C081A] text-[#309C08] rounded-4xl">
                {availability ? "in stock" : "not available"}
              </button>
            </div>
            <p className="font-semibold text-gray-700">{description}</p>

            <div className=" text-xl">
              <h1 className="font-semibold">Specification</h1>
              <ol
                className="text-gray-700 ml-6"
                style={{ listStyleType: "decimal" }}
              >
                {Specification.map((spis, i) => (
                  <li key={i}>{spis}</li>
                ))}
              </ol>
            </div>
            <div className="text-2xl font-bold">
              {rating}
              <div></div>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => {
                  handleAddToCart(), setIsAdded(true);
                }}
                className="btn btn-primary rounded-4xl"
              >
                Add to cart <AiOutlineShoppingCart />
              </button>
              <button
                onClick={() => {
                  handleAddTowishlist(), setIsAddedWishList(true);
                }}
                className=" border-amber-100 border-1 p-3 rounded-full text-xl"
              >
                <CiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ShowDetail.propTypes = {
  prodect: PropTypes.array.isRequired,
};
export default ShowDetail;
