import React from "react";

const LoginForm: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="w-full">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 texat-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
