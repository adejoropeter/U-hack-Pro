import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ItemContext } from "./components/contextApi/statemanagement.contextApi";

const ProtectedRoutes = () => {
  const { isAuth } = ItemContext();
  const location=useLocation()
  return (
    isAuth?<Outlet/>:<Navigate to="/login" state={{from:location}} replace/>
  );
};

export default ProtectedRoutes;
