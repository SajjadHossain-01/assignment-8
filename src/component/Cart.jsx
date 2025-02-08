import { useContext,  useState } from "react";
import Modal from "./Modal";
import { CartList } from "../App";
import CartProduct from "./CartProduct";

const Cart = () => {
  const cartlistProduct = useContext(CartList);

 console.log(cartlistProduct);
  

  const [isVisible, setIsVisible] = useState();
  return (
    <div className="mt-10 lg:w-7xl m-auto ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="flex items-center gap-5">
          <h1 className="text-2xl font-semibold">total cost</h1>
          <button className="btn btn-primary rounded-4xl">
            short by price
          </button>
          <button
            onClick={() => setIsVisible(true)}
            className="btn btn-primary rounded-4xl"
          >
            purchase
          </button>
        </div>
      </div>

      <div className="mt-11 grid grid-cols-1 gap-7">
        {cartlistProduct.map((product,idex)=><CartProduct key={idex} product={product} ></CartProduct>)}
      </div>
      <Modal
        isVisible={isVisible}
        setIsVisible={() => setIsVisible(false)}
      ></Modal>
    </div>
  );
};

export default Cart;
