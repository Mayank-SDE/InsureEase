/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, isAdmin, adminOnly }) => {
  // If the route is admin-only, ensure user is both authenticated AND an admin
  if (adminOnly && (!isAuthenticated || !isAdmin)) {
    return <Navigate to="/login" replace />;
  }

  // If it's a normal protected route, just check authentication
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
