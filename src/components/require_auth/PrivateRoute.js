import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';

const PrivateRoute = ({children}) => {
    
    const location = useLocation();
    const navigate = useNavigate();
    
    const token = localStorage.getItem('accessToken');

    if (!token || token === 'null' || token === 'undefined' ) {
      console.log('is this false??')
      navigate('/login');
      };


    return token? children : <Navigate to='/login' />
};

export default PrivateRoute;