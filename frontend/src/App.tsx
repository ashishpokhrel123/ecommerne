import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import LandingPage from "./pages/Consumer/LandingPage";
import LoginPage from "./pages/Auth/LoginPage";
import PoductDetails from "./pages/Consumer/PoductDetails";
import RegisterPage from "./pages/Auth/RegisterPage";
import ForgetPasswodPage from "./pages/Auth/ForgetPasswodPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPasswodPage />} />
        <Route path="/*" element={<LayoutRoutes />} />
      </Routes>
    </Router>
  );
}

function LayoutRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product-details/:id" element={<PoductDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
