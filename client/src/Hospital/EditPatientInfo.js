/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditPatientInfo = () => {
  const [patientInfo, setPatientInfo] = useState(
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
    }
  );
  const { userId } = useParams();
  console.log(userId);

  function handleSectionChange(event) {}
  return (
    <>
      <div className="text-xl  mt-3">
        <h1 className="text-2xl mx-10 border-b-4 font-bold ">
          Edit Patient Information:{" "}
        </h1>
        <div className="mx-14 space-y-3">
          <div>
            <label>Patient ID: </label>
            <span className="bg-none">{patientInfo?.id}</span>
          </div>

          <div>
            <label>Patient Name: </label>
            <input type="text" defaultValue={patientInfo?.name} />
          </div>

          <div>
            <label>Gender: </label>
            <input type="text" defaultValue={patientInfo?.gender} />
          </div>

          <div>
            <label>Blood Group: </label>
            <input type="text" defaultValue={patientInfo?.blood_group} />
          </div>

          <div>
            <label>Age: </label>
            <input type="text" defaultValue={patientInfo?.age} />
          </div>
        </div>
        <div className="mt-2">
          <label>Section:</label>
          <select onChange={handleSectionChange}>
            <option value="diabetes">Diabetes</option>
            <option value="covid-19">COVID-19</option>
            <option value="fever">Fever</option>
            <option value="aids">AIDS</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default EditPatientInfo;
