import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = Cookies.get('jwt');
  
  if (!token) {
    return <Navigate to="/signin" />; // Redirect to login if not authenticated
  }

  return children; // Allow access to protected route
}

export default ProtectedRoute;
