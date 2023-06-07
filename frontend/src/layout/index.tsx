import React, { useEffect } from "react";
import TopBar from "../components/common/TopBar";
import NavBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import useFetchUserDetails from "../components/hook/useFetchUserDetails";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const userDetails = useFetchUserDetails();

  return (
    <>
      <div className="sticky top-0 z-10">
        <TopBar />
        <NavBar userDetails={userDetails} />
      </div>

      <div className="m-5">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
