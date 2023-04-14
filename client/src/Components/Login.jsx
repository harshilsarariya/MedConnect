import { useState } from 'react';

const Login = () => {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  const handleIDChange = (e) => {
    setID(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 ">
  <div className="max-w-md w-full space-y-8 ">
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 ">Hello Again!</h2>
    </div>
    <form onSubmit={handleSubmit} className="mt-8 space-y-6 " >
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <input
            id="ID"
            name="ID"
            type="ID"
            autoComplete="ID"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Enter ID"
            value={ID}
            onChange={handleIDChange}
          />
        </div>
        <br/>
        <div>
          
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm">
              <a href="#" className="font-medium text-grey-900 hover:text-orange-500 hover:underline">
                Forgot your password?
              </a>
            </div>
      </div>
             
          <div>
            <button
              type="submit"
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white bg-blue-500 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            >
              <a href="/home"></a>
            Log in
        </button>
      </div>
      
    </form>
  </div>
</div>

  )
}

export default Login;