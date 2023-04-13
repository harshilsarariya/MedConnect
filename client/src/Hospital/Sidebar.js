import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="mt-4 w-64 h-screen bg-[#2a3484] text-white p-4">
      <div className="font-bold text-xl mb-4">Hospital Section</div>
      <ul>
        <li className="my-3">
          <NavLink to={"/Hospital"} className="hover:text-gray-400">
            Dashboard
          </NavLink>
        </li>
        <li className="my-3">
          <NavLink
            to={"/Hospital/SearchPatient"}
            className="hover:text-gray-400"
          >
            Search Patient
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
