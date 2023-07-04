import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import client from "../api/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await client.post("/user/login", {
        email,
        password,
      });
      if (data.success) {
        navigation("/patient");
      } else {
        alert(data.message);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center mx-10 mt-10 justify-center bg-gray-100">
      <div className="p-4 bg-white rounded-md shadow-md w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-gray-700 font-semibold">New user? </span>
              <Link
                to="/signup"
                className="text-blue-500 font-semibold hover:text-green-900"
              >
                Register here.
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-900 hover:text-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
