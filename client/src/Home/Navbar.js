import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-500 text-white p-4">
      <div className="text-xl font-bold">
        <NavLink to={"/"}>MedConnect</NavLink>
      </div>
      <div>
        <NavLink to={"/Login"}>
          <button className="bg-white hover:bg-blue-300 hover:text-black text-blue-500 font-bold py-2 px-4 rounded">
            Login
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
