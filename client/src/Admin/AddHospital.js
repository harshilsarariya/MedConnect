import { useState } from "react";
import React from "react";

function AddHospital() {
  const [hospitalData, setHospitalData] = useState({
    id: "",
    name: "",
    address: "",
    pincode: "",
    noOfSpecialistDoctors: 0,
    speciality: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHospitalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(hospitalData);
    alert("Hospital has been added successfully!");
    setHospitalData({
      id: "",
      name: "",
      address: "",
      pincode: "",
      noOfSpecialistDoctors: 0,
      speciality: "",
    });
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <h2 className="text-2xl font-bold mb-5">Add Hospital</h2>
      <form onSubmit={handleSubmit} className="w-1/2">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Hospital Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={hospitalData.name}
            onChange={handleInputChange}
            placeholder="Enter hospital name"
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address
          </label>
          <input
            required
            type="text"
            id="address"
            name="address"
            value={hospitalData.address}
            onChange={handleInputChange}
            placeholder="Enter hospital address"
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pincode"
            className="block text-gray-700 font-bold mb-2"
          >
            Pincode
          </label>
          <input
            required
            type="text"
            id="pincode"
            name="pincode"
            value={hospitalData.pincode}
            onChange={handleInputChange}
            placeholder="Enter pincode"
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="noOfSpecialistDoctors"
            className="block text-gray-700 font-bold mb-2"
          >
            No of Specialist Doctors
          </label>
          <input
            required
            type="number"
            id="noOfSpecialistDoctors"
            name="noOfSpecialistDoctors"
            value={hospitalData.noOfSpecialistDoctors}
            onChange={handleInputChange}
            placeholder="Enter no of specialist doctors"
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="speciality"
            className="block text-gray-700 font-bold mb-2"
          >
            Speciality
          </label>
          <input
            required
            type="text"
            id="speciality"
            name="speciality"
            value={hospitalData.speciality}
            onChange={handleInputChange}
            placeholder="Speciality of Hospital"
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="flex my-3 justify-center text-xl">
          <button
            onClick={handleSubmit}
            className="rounded-md bg-[#3f30a4] text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddHospital;
