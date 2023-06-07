import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { getProfile, signIn } from "../../api/auth/auth";
import { updateUserDetails, updateAccessToken } from "../../redux/userSlice";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialState);
  const [cookies, setCookie] = useCookies(["token"]);
  const token = cookies.token;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await signIn(formValues);
    if (response?.status === 201) {
      const token = response.data.access_token;
      setCookie("token", token);
      dispatch(updateAccessToken(token));
      navigate("/");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 border-green-900 p-4">
        <h1 className="text-center">Login</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded"
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded"
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <a
                className="text-blue-500 hover:underline"
                href="/forget-password"
              >
                Forgot Password?
              </a>
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          Don't have an account?{" "}
          <a className="text-blue-500 hover:underline" href="/signup">
            Create a new account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
