import PropTypes from "prop-types";

const WishListProduct = ({ product,handleAddToCart }) => {
  const { product_title, product_image, price,product_id } = product;
  

  return (
    <div>
      <div className="hero bg-base-200 rounded-3xl ">
        <div className="hero-content fex flex-col  p-8 lg:flex-row lg:justify-between w-full text-center lg:text-start ">
          <div className=" bg-white rounded-2xl ">
            <img
              src={product_image}
              className=" min-w-[200px] max-h-[124px] rounded-lg "
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-3xl sora-font">{product_title}</h1>
            <h1 className="text-xl sora-font2">Price: $ {price}</h1>
            <div className="mr-6">
              <button onClick={()=>handleAddToCart(product_id)} className="px-6 py-3 bg-[#9538E2] rounded-4xl sora-font2 text-xl text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WishListProduct.propTypes = {
  product: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired
};

export default WishListProduct;
