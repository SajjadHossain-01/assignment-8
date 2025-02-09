import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Nav from "./component/nav";
import { createContext, useEffect, useState } from "react";
export const ProductsData = createContext("product");
export const AddedProduct = createContext("added");
export const AddedProductWishlist = createContext("added");
export const CartList = createContext("cart");
export const Wishlists = createContext("wishlist");
function App() {
  const [product, setProduct] = useState([]);
  const [productWish, setProductWish] = useState([]);
  const [addedProduct, setAddedProduct] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  // const handleAddedProduct = (id) => {
  //   setAddedProduct([...addedProduct, id]);
  // };
  // const handleAddedProductWishlist = (id) => {
  //   setProductWish([...productWish, id]);
  // };
  return (
    <>
      <ProductsData.Provider value={product}>
        <AddedProduct.Provider value={setAddedProduct}>
          <AddedProductWishlist.Provider value={setProductWish}>
            <CartList.Provider value={addedProduct}>
              <Wishlists.Provider value={productWish}>
                <Nav
                  addedProduct={addedProduct}
                  productWish={productWish}
                ></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
              </Wishlists.Provider>
            </CartList.Provider>
          </AddedProductWishlist.Provider>
        </AddedProduct.Provider>
      </ProductsData.Provider>
    </>
  );
}

export default App;
