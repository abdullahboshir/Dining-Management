import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const location = useLocation();
    const token = localStorage.getItem('accessToken');


    console.log('this is token',token)



    return token? children : <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRoute;