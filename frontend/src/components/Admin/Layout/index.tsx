import React from "react";
import Sidebar from "../Sidebar/SideBar";
import Header from "../Header/Header";
import useFetchUserDetails from "../../../hook/useFetchUserDetails";

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  const userDetails = useFetchUserDetails();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header user={userDetails} className="bg-gray-800 text-white" />
        <div className="p-5 flex-grow bg-white">
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
