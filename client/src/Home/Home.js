import React from "react";
import { NavLink } from "react-router-dom";
import HomeImg from "../../src/assets/images/home.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-max bg-[#6e6e6e]">
        <h1 className="text-5xl font-bold text-white mb-10">
          Welcome to MedConnect
        </h1>
        <div className="flex flex-row">
          <img
            src={HomeImg}
            alt="Hospital"
            className="w-[700px] rounded-sm h-auto mb-10"
          />
          <div className="flex flex-col">
            <p className="text-xl mx-16 leading-tight text-white max-w-xl text-justify mb-10">
              Our hospital management system makes it easy to manage patients,
              doctors, appointments and more. With our system, you can
              streamline your operations, reduce costs and improve patient care.
              Our hospital management system makes it easy to manage patients,
              doctors, appointments and more. With our system, you can
              streamline your operations, reduce costs and improve patient care.
              Our hospital management system makes it easy to manage patients,
              doctors, appointments and more. With our system, you can
              streamline your operations, reduce costs and improve patient care.
              Our hospital management system makes it easy to manage patients,
              doctors, appointments and more. With our system, you can
              streamline your operations, reduce costs and improve patient care.
            </p>
            <NavLink to={"/login"}>
              <button className="bg-white flex justify-center text-blue-500 font-semibold py-2 px-4 border-blue-500 mx-64 mb-10 hover:bg-blue-300 hover:text-black rounded-md hover:shadow-lg transition duration-300 ">
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
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
        <footer className="bg-blue-900 w-full py-4 text-white flex justify-center items-center">
          <p className="text-sm">
            &copy; 2023 MedConnect. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
