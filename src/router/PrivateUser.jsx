import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateUser({ children }) {
  const location = useLocation();
  if (localStorage.getItem("role") !== "user") {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}

export default PrivateUser;
