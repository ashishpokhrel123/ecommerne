import React from "react";
import Topbar from "../../components/common/TopBar";
import NavBar from "../../components/common/Navbar";
import Banner from "../../components/common/Banner";
import Filter from "../../components/common/Filter";
import AllProduct from "../../components/Consumer/AllProduct/AllProduct";
import Footer from "../../components/common/Footer";

function LandingPage() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Filter />
      <div className="flex items-center px-4 mt-5">
        <h1 className="font-bold">Product for You</h1>
      </div>
      <div className="px-4 mt-3">
        <AllProduct />
      </div>
      <div className="flex items-center px-4 mt-5">
        <h1 className="font-bold">Recently Viewed</h1>
      </div>
      <div className="px-4 mt-3">
        <AllProduct />
      </div>
    </div>
  );
}

export default LandingPage;
