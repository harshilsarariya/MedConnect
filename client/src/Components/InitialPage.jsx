import React from 'react';
import backgroundImage from './bg-banner.jpg';
import { Link } from 'react-router-dom';

function InitialPage() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-full flex flex-col items-center justify-center bg-gray-900 bg-opacity-70">
        <h1 className="text-white text-5xl font-bold mb-8">Welcome to MedConnect!</h1>
        <div className="flex space-x-4">
            <Link to="/login">
            <button className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-blue-200">
                Log in
            </button>
          </Link>
          <Link to="/signup">
          <button className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-blue-200">
            Sign up
          </button>      
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default InitialPage;
