import React from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 border-green-900 p-4">
        <h1 className="text-center">Forgot Password</h1>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="text-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          Remember your password?{" "}
          <Link className="text-blue-500 hover:underline" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
