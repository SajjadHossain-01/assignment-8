


import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
   
      const { product_title,product_image,price,product_id } = product;
    return (
      <div className="card h-full flex-col bg-white rounded-2xl text-black ">
          <figure className="mx-5 my-5 border-[#9538E2] border-2 rounded-2xl">
            <img
              src={product_image}
              alt="Shoes"
              className="rounded-xl max-h-[181px] "
            />
          </figure>
          <div className="card-body h-flex flex flex-col">
            <h2 className="text-2xl sora-font">{product_title}</h2>
           <h2 className='text-xl sora-font2 text-[#09080F99]'>Price: $ {price}</h2>
            <div className="card-actions mt-auto">
              <Link to={`/Product/${product_id}`}><button className=" border-[#9538E2] border-2 px-6 text-[#9538E2] sora-font rounded-4xl py-3">View Detail</button></Link>
            </div>
          </div>
        </div>
    );
  };
Product.propTypes = {
    product: PropTypes.array.isRequired
};

export default Product;
