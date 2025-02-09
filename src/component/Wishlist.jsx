import { useContext } from "react";
import {
  AddedProduct,
  AddedProductWishlist,
  CartList,
  Wishlists,
} from "../App";
import WishListProduct from "./WishListProduct";
const Wishlist = () => {
  const wishListProduct = useContext(Wishlists);
  const setWishProduct = useContext(AddedProductWishlist);
  const handleAddedProduct = useContext(AddedProduct);
  const cartList = useContext(CartList);
  const handleAddToCart = (productid) => {
    const addToCartProduct = wishListProduct.find(
      (products) => products.product_id === productid
    );
    console.log(wishListProduct, addToCartProduct, cartList);
    handleAddedProduct([...cartList, addToCartProduct]);
    const removeFromWish = wishListProduct.filter(
      (product) => product.product_id !== productid
    );

    setWishProduct(removeFromWish);
    console.log(removeFromWish);
  };

  return (
    <div className="mt-12 lg:w-7xl m-auto ">
      <div>
        <h1 className="sora-font text-2xl text-start">WishList</h1>
      </div>
      <div>
        {wishListProduct.map((product, idex) => (
          <WishListProduct
            key={idex}
            product={product}
            handleAddToCart={handleAddToCart}
          ></WishListProduct>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
