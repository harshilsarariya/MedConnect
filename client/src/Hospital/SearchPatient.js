import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const patients = [
  {
    id: "P0001",
    name: "Rajan",
    gender: "Male",
    blood_group: "O+",
    age: 20,
  },
  {
    id: "P0002",
    name: "Triparna",
    gender: "Female",
    blood_group: "B+",
    age: 20,
  },
  {
    id: "P0003",
    name: "Harshil",
    gender: "Male",
    blood_group: "A+",
    age: 19,
  },
  {
    id: "P0004",
    name: "kevin",
    gender: "Male",
    blood_group: "AB+",
    age: 21,
  },
];

function SearchPatient() {
  const [searchId, setSearchId] = useState("");
  const [patientInfo, setPatientInfo] = useState({});

  const handleSearch = () => {
    const result = patients.find((patient) => patient.id === searchId);
    setPatientInfo(result || {});
  };

  const handleIdChange = (e) => {
    setSearchId(e.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="mx-3">
        <NavLink to={`/Hospital/EditPatientInfo/${searchId}`}>
          <button className="bg-[#233156] text-xl mr-3 rounded-md mt-3 text-white px-3 py-2">
            Edit Info
          </button>
        </NavLink>
      </div>
      <div className="p-4 mt-12 ml-4">
        <div className="flex text-xl items-center mb-4">
          <label htmlFor="search-id" className="mr-2">
            Patient ID:
          </label>
          <input
            type="text"
            id="search-id"
            value={searchId}
            onChange={handleIdChange}
            onKeyPress={handleKeyPress}
            className="border-2 rounded-lg border-gray-300 p-1"
          />
          <button
            onClick={handleSearch}
            className="bg-[#232856] text-white px-4 py-1.5 ml-2 rounded-md"
          >
            Search
          </button>
        </div>
        <div className="border-t-4 border-gray-300 pt-4">
          {patientInfo.id && (
            <div>
              <div className="font-bold text-xl">Patient Information</div>
              <div className="text-xl mx-3 mt-3">ID: {patientInfo.id}</div>
              <div className="text-xl mx-3">Name: {patientInfo.name}</div>
              <div className="text-xl mx-3">Gender: {patientInfo.gender}</div>
              <div className="text-xl mx-3">
                Blood Group: {patientInfo.blood_group}
              </div>
              <div className="text-xl mx-3">Age: {patientInfo.age}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchPatient;
