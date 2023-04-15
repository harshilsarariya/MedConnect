import React from "react";
import { NavLink } from "react-router-dom";
import HomeImg from "../../src/assets/images/home.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-max bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-800 mb-10 mt-5">
          Welcome to MedConnect
        </h1>
        <div className="flex flex-row">
          <img
            src={HomeImg}
            alt="Hospital"
            className="w-[700px] rounded-sm h-auto mb-10"
          />
          <div className="flex flex-col my-auto">
            <p className="text-xl mx-16 leading-tight text-gray-800 max-w-xl text-justify mb-10">
              Our hospital management system makes it easy to manage patients,
              doctors, appointments and more. With our system, you can
              streamline your operations, reduce costs and improve patient care.
            </p>
            <NavLink to={"/login"}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border-blue-500 mx-64 mb-10 rounded-md hover:shadow-lg transition duration-300 ">
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <NavLink to={"/Hospital"}>
            <button className="my-3 text-xl bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-md">
              Hospital
            </button>
          </NavLink>
          <NavLink to={"/Admin"}>
            <button className="my-3 mx-3 text-xl bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-md">
              Admin
            </button>
          </NavLink>
        </div>
        <div className="flex flex-col items-center my-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Medical Consultation</h3>
              <p className="text-gray-800 text-lg">
                Our team of experienced medical professionals provide expert
                advice on health and medical issues.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Hospital Management</h3>
              <p className="text-gray-800 text-lg">
                Our hospital management system makes it easy to manage patients,
                doctors, appointments and more.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Patient Care</h3>
              <p className="text-gray-800 text-lg">
                Our focus is always on providing the best care for our patients
                and ensuring their well-being.
              </p>
            </div>
          </div>
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
