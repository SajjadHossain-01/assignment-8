import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

import propTypes from "prop-types";
import PropTypes from "prop-types";

const Nav = ({ addedProduct, productWish }) => {
  const [isPressed, setIsActive] = useState();

  const Navlink1 = (
    <NavLink
      to={"/"}
      className={({ isActive }) => {
        isActive ? setIsActive(true) : setIsActive(false);
      }}
    >
      Home
    </NavLink>
  );
  const Navlink2 = <NavLink to={"/dashboard"}>Dashboard</NavLink>;
  const Navlink3 = <NavLink to={"/Statistics"}>Statistics</NavLink>;
  return (
    <div className={`lg:w-7xl m-auto ${isPressed && "text-white mt-7"} `}>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="sora-font">{Navlink1}</li>

              <li>{Navlink2}</li>
              <li>{Navlink3}</li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost lg:text-2xl text-xl font-bold sora-font">
            Gadget Haven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className=" text-xl font-semibold sora-font2">{Navlink1}</li>

            <li className=" text-xl  sora-font2">{Navlink2}</li>
            <li className=" text-xl  sora-font2">{Navlink3}</li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="indicator">
            <Link
              to={"/cart"}
              className=" border-amber-100 border-1 p-3 rounded-full text-xl"
            >
              <AiOutlineShoppingCart />
            </Link>
            <span className="badge badge-sm bg-none indicator-item">
              {addedProduct.length}
            </span>
          </div>
          <div className="indicator">
            <Link
              to={"/wishlist"}
              className=" border-amber-100 border-1 p-3 rounded-full text-xl ml-2"
            >
              <CiHeart />
            </Link>
            <span className="badge badge-sm indicator-item">{productWish.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  addedProduct: propTypes.array.isRequired,
  productWish: PropTypes.array.isRequired
};
export default Nav;
