import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AddedProduct, AddedProductWishlist, CartList, Wishlists } from "../App";
const ShowDetail = ({ prodect }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedWishlist, setIsAddedWishList] = useState(false);
  const handleAddedProduct = useContext(AddedProduct);
  const cartList = useContext(CartList)
  const handleAddedProductwishlist = useContext(AddedProductWishlist);
  const Wishlist = useContext(Wishlists)
  const handleAddToCart = () => {
    if (!isAdded) {
      handleAddedProduct([...cartList,prodect]);
    }
  };
  const handleAddTowishlist = () => {
    if (!isAddedWishlist) {
      handleAddedProductwishlist([...Wishlist,prodect]);
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
      <div className="hero bg-white rounded-4xl p-8">
        <div className="hero-content flex-col lg:flex-row lg:gap-7  rounded-4xl">
          <div className="lg:min-w-[424.31px]  ">
            <img src={product_image} className=" w-full rounded-lg" />
          </div>
          <div className="flex flex-col gap-3 text-black">
            <h1 className="text-4xl font-semibold sora-font">
              {product_title}
            </h1>
            <p className=" text-xl font-medium sora-font">Price: ${price}</p>
            <div>
              <button className="btn btn-sm btn-active border-2 border-[#309C08] bg-[#309C081A] text-[#309C08] sora-font rounded-4xl">
                {availability ? "In stock" : "not available"}
              </button>
            </div>
            <p className="font-semibold text-gray-700 sora-font2">
              {description}
            </p>

            <div className=" text-xl">
              <h1 className="sora-font">Specification</h1>
              <ol
                className="text-gray-700 ml-6 sora-font2"
                style={{ listStyleType: "decimal" }}
              >
                {Specification.map((spis, i) => (
                  <li key={i}>{spis}</li>
                ))}
              </ol>
            </div>
            <div className=" gap-2 flex">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                />
              </div>
              
              <div><h1 className="sora-font2 rounded-4xl py-2 px-3.5 bg-[#09080F0D] ">{rating}</h1></div>
            </div>
            <div className="flex gap-6 w-full">
              <button
                onClick={() => {
                  handleAddToCart(), setIsAdded(true);
                }}
                className="bg-[#9538E2] text-white sora-font2 font-extrabold px-5 flex items-center gap-2   rounded-4xl py-3"
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
