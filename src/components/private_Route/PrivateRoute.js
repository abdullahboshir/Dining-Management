import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');


    // console.log('this is token',token)

    if (!token) {
        navigate('/login');
      }


    return token? children : <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRoute;