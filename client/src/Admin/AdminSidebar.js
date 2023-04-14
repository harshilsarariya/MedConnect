import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <div className="h-screen w-52 mt-3 bg-blue-900 text-white flex flex-col justify-between py-4 px-2">
        <div>
          <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
          <ul className="mx-3 text-xl">
            <li className="my-2">
              <Link to="/Admin" className="hover:text-blue-200">
                Dashboard
              </Link>
            </li>
            <li className="my-2">
              <Link to="/statistics" className="hover:text-blue-200">
                Statistics
              </Link>
            </li>
            <li className="my-2">
              <Link to="/addHospital" className="hover:text-blue-200">
                Add Hospital
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Your Company Name
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
