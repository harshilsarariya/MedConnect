import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-500 text-white p-4">
      <div className="text-xl font-bold">
        <NavLink to={"/"}>MedConnect</NavLink>
      </div>
      <div>
        <button className="bg-white text-blue-500 hover:bg-[#224a78] hover:text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;