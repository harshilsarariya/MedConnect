import React from "react";
import  { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="mt-2 text-xl mx-4">This is the Home page of MedConnect...</div>
      <NavLink to={"/Hospital"}>
        <button className="my-3 flex justify-center mx-auto text-xl bg-[#224a78] p-2 text-white rounded-md">Hospital</button>
      </NavLink>
    </>
  );
};

export default Home;
