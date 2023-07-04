import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import client from "../api/client";

const Singup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigation = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await client.post("/user/signup", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
      console.log(response.data);
      alert("Signup successful!");
      navigation("/patient");
    } catch (error) {
      console.log(error);
      alert("Error occured while signing up!");
    }
  };

  return (
    <div className="flex items-center mx-10 mt-10 justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-4 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Sign Up</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Patient Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Patient Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Phone Number
          </label>
          <input
            required
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Confirm Password
          </label>
          <input
            required
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <span className="text-3xl font-semibold">Already a user? </span>
        <Link
          to={"/login"}
          className="text-blue-500 font-semibold hover:text-green-900"
        >
          Login here!
        </Link>
        <div className="flex justify-center">
          <button
            onSubmit={handleSubmit}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-900 hover:text-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Singup;
