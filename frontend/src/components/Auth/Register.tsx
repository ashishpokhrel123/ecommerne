import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../api/auth/auth";
import SuccessMessage from "../../common/message/SuccessMessage";
import ErrorMessage from "../../common/message/ErrorMessage";

function Register() {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phone: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleConfirmPasswordKeyUp = () => {
    if (
      formValues.confirmPassword &&
      formValues.password !== formValues.confirmPassword
    ) {
      setPasswordError("Password do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await signUp(formValues);
      if (response?.status === 201) {
        setShowSuccessMessage(true);
        setFormValues({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          gender: "",
          phone: "",
        });
        let remainingTiming = 5;
        const timer = setInterval(() => {
          remainingTiming--;
          setTimeRemaining(remainingTiming);
          if (remainingTiming === 0) {
            setShowSuccessMessage(false);
            clearInterval(timer);
            navigate("/login");
          }
        }, 1000);
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setShowErrorMessage(true);
        setErrorMessage(error.response.data.message);
        if (error.response.data.message === "Email already exists") {
          emailInputRef.current?.focus();
        }
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      {showSuccessMessage && (
        <SuccessMessage
          message={`User created successfully. Redirecting to the Login Page in ${timeRemaining} seconds`}
          onClose={() => setShowSuccessMessage(false)}
        />
      )}

      {showErrorMessage && (
        <ErrorMessage
          message={errorMessage}
          onClose={() => setShowErrorMessage(false)}
        />
      )}

      <div className="flex items-center justify-center h-screen">
        <div className="border-2 border-green-900 p-4">
          <h1 className="text-center">Register</h1>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2" htmlFor="fullName">
                  Full Name:
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  type="text"
                  id="fullName"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="contactNumber">
                  Contact Number:
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  type="tel"
                  id="contactNumber"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2" htmlFor="gender">
                  Gender:
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  id="gender"
                  name="gender"
                  value={formValues.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  ref={emailInputRef}
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
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
              <div>
                <label className="block mb-2" htmlFor="confirmPassword">
                  Confirm Password:
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  onKeyUp={handleConfirmPasswordKeyUp}
                  required
                />
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
              </div>
              <div className="col-span-2">
                <label className="block mb-2" htmlFor="address">
                  Address:
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  id="address"
                  name="address"
                  required
                ></textarea>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-blue-500 hover:underline" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
