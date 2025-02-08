


import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
   
      const { product_title,product_image,price,product_id } = product;
    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 py-10 h-[181px]">
            <img
              src={product_image}
              alt="Shoes"
              className="rounded-xl object-cover"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{product_title}</h2>
           <h2 >Price{price}</h2>
            <div className="card-actions">
              <Link to={`/Product/${product_id}`}><button className="btn btn-primary">Show Detial</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
Product.propTypes = {
    product: PropTypes.array.isRequired
};

export default Product;
