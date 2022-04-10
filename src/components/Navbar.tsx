import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.products.cart);
  return (
    <div className="flex justify-between items-center px-8 h-20 bg-slate-300">
      <span className="font-bold cursor-pointer">EcomStore</span>
      <ul className="list-none flex space-x-4">
        <li className="cursor-pointer font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer font-semibold">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="font-semibold">
          Cart Length: <span className="font-black"> {cartItems.length}</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
