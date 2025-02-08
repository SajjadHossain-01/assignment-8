import propTypes from "prop-types";

const CartProduct = ({ product }) => {
  const { product_title, product_image, price, } = product;
  return (
    <div>
      <div className="hero bg-base-200 rounded-3xl ">
        <div className="hero-content fex flex-col lg:flex-row lg:justify-between w-full items-center">
          <div className="min-w-[200px] min-h-[124px] bg-white rounded-2xl">
            <img src={product_image} className="  rounded-lg " />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold">{product_title}</h1>
            <h1 className="text-xl font-semibold">Price: $ {price}</h1>
            
          </div>
          <div className="mr-6">
              <button className="btn text-red-900 border-red-900 text-xl rounded-full">
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
};

export default CartProduct;
