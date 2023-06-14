import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import LandingPage from "./pages/Consumer/LandingPage";
import LoginPage from "./pages/Auth/LoginPage";
import PoductDetails from "./pages/Consumer/PoductDetails";
import RegisterPage from "./pages/Auth/RegisterPage";
import ForgetPasswodPage from "./pages/Auth/ForgetPasswodPage";
import AdminLayout from "./components/Admin/Layout";
import Dashboard from "./components/Admin/DashBoard/Dashboard";
import Orders from "./components/Admin/DashBoard/Orders/Orders";
import Product from "./components/Admin/DashBoard/Product/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPasswodPage />} />
        <Route path="/*" element={<LayoutRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
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

function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </AdminLayout>
  );
}

export default App;
