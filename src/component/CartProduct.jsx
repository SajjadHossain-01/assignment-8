import propTypes from "prop-types";

const CartProduct = ({ product,handleRemoveFromCart }) => {
  const { product_title, product_image, price,product_id } = product;
  return (
    <div>
      <div className="hero bg-base-200 rounded-3xl ">
        <div className="hero-content fex flex-col lg:max-h-[188px] p-8 lg:flex-row lg:justify-between w-full text-center lg:text-start ">
          <div className=" bg-white rounded-2xl ">
            <img src={product_image} className=" min-w-[200px] max-h-[124px] rounded-lg " />
          </div>
          <div className="w-full">
            <h1 className="text-3xl sora-font">{product_title}</h1>
            <h1 className="text-xl sora-font2">Price: $ {price}</h1>
            
          </div>
          <div className="mr-6">
              <button onClick={()=>handleRemoveFromCart(product_id)} className=" border-1 px-3 py-1 text-red-900 border-red-900 text-xl sora-font2  rounded-full">
                X
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  product: propTypes.array.isRequired,
  handleRemoveFromCart: propTypes.func
};

export default CartProduct;
