import React, { useEffect } from "react";
import TopBar from "../components/common/TopBar";
import NavBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useSelector } from "react-redux";
import { IsAuthenticated } from "../redux/userSlice";
import useTokenValidation from "../hook/useCheckAuthencation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useTokenValidation();

  const isLogged = useSelector(IsAuthenticated);

  return (
    <>
      <div className="sticky top-0 z-10">
        <TopBar />
        <NavBar isLogged={isLogged} />
      </div>

      <div className="m-5">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
