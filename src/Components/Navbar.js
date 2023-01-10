import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContextProvider } from "../Context/CartContext";
import { ProductProvider } from "../Context/ProductContext";
const Navbar = () => {
  const { cart } = useContext(cartContextProvider);

  return (
    <div className="navbarContainer">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src="../img/logo.png" alt="" className="logo_img" />
        </Link>
      </div>

      <div className="search">
        {/**/}
        <input type="Search" placeholder="search product, mobile, electronics" />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <nav className="navbarwrapper">
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          <li>
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>{" "}
            <span className="cartCount">{cart.length}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
