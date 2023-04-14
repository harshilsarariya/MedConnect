import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="mt-2 text-xl mx-4"></div>
      This is the Home page of MedConnect...
      <div className="flex flex-row justify-center">
        <NavLink to={"/Hospital"}>
          <button className="my-3 text-xl bg-[#224a78] p-2 text-white rounded-md">
            Hospital
          </button>
        </NavLink>
        <NavLink to={"/Admin"}>
          <button className="my-3 mx-3 text-xl bg-[#224a78] p-2 text-white rounded-md">
            Admin
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
