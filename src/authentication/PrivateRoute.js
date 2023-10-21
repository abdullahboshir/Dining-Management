import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    
    const location = useLocation();
    
    const token = localStorage.getItem('accessToken');


    if (!token || token === 'null' || token === 'undefined') {
      console.log('I am from Admin route')
      return <Navigate to='/login' state={{ from: location }} replace />;
    }
  
    return <Outlet />;
  
};

export default PrivateRoute;