import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-lg">
      <Link to="/" className="text-lg font-bold">ShopEase</Link>
      <div className="flex gap-4">
        <Link to="/signin" className="hover:underline">Sign In</Link>
        <Link to="/signup" className="hover:underline">Sign Up</Link>
        <Link to="/cart" className="flex items-center gap-2">
          <ShoppingCart /> <span>({cartCount})</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
