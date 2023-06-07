import React, { FC, ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../redux/userSlice";

type ProtectedRouteProps = {
  path: string;
  component: React.ComponentType<any>;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  path,
  component: Component,
}) => {
  const accessToken = useSelector(selectAccessToken);

  if (!accessToken) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <Routes>
      <Route path={path} element={<Component />} />;
    </Routes>
  );
};
