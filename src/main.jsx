import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import Dashboard from "./page/Dashboard";
import Statistics from "./page/Statistics";
import Products from "./component/Products";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";
import Wishlist from "./component/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      { path: "/Statistics", element: <Statistics></Statistics> },
      { path: "/Product", element: <Products></Products> },
      { path: "/Product/:productId", element: <ProductDetail></ProductDetail> },
      { path:"/cart", element:<Cart></Cart>},
      {path:"/wishlist",element:<Wishlist></Wishlist>}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
