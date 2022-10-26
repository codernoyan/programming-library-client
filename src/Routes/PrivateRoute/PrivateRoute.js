import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-rose-400"></div>
      </div>
    )
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>
  
};

export default PrivateRoute;