import { useContext, useState } from "react";
import Modal from "./Modal";
import { AddedProduct, CartList } from "../App";
import CartProduct from "./CartProduct";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";
const Cart = () => {
  const removedProduct =useContext(AddedProduct)
  const cartlistProduct = useContext(CartList);
  const handleRemoveFromCart = (productid) => {
    const removeFromCart = cartlistProduct.filter(
      (product) => product.product_id !== productid
    );
    removedProduct(removeFromCart)
    console.log(removeFromCart);
  };
  const handleShorBy =()=>{
   const shortedProduct= [...cartlistProduct].sort((a,b)=>a.price- b.price);
   removedProduct(shortedProduct)
  }
  console.log(cartlistProduct);

  const [isVisible, setIsVisible] = useState();
  return (
    <div className="mt-10 lg:w-7xl m-auto ">
      <div className="flex flex-col lg:flex-row gap-3 justify-between items-center">
        <h1 className="sora-font text-2xl">Cart</h1>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <h1 className="text-2xl sora-font ">Total Cost : $</h1>
          <button onClick={handleShorBy} className="flex items-center gap-2 px-6 py-3 border-[#9538E2] text-[#9538E2] border-2 sora-font text-xl rounded-4xl">
            short by price <FaArrowDownUpAcrossLine />
          </button>
          <button
            onClick={() => setIsVisible(true)}
            className="px-6 py-3 bg-[#9538E2] rounded-4xl sora-font2 text-xl text-white"
          >
            purchase
          </button>
        </div>
      </div>

      <div className="mt-11 grid grid-cols-1 gap-7">
        {cartlistProduct.map((product, idex) => (
          <CartProduct
            key={idex}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></CartProduct>
        ))}
      </div>
      <Modal
        isVisible={isVisible}
        setIsVisible={() => setIsVisible(false)}
      ></Modal>
    </div>
  );
};

export default Cart;
