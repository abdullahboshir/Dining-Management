import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import SingleDine from '../pages/SingleDine';
import Students from '../pages/Students';
import DineNav from '../components/dineActivities/DineNav';
import Login from '../pages/Login';
import SetPassword from '../pages/SetPassword';
import PrivateRoute from '../components/private_Route/PrivateRoute';





const AllRoutes = () => {

    return (
        <div>
            <Routes>

                <Route path='/' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />

                <Route path='home' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />

                <Route path='home' element={<Home />} />
                <Route path='login' element={<Login />} />

                <Route path='setPassword' element={
                    <PrivateRoute>
                        <SetPassword />
                    </PrivateRoute>
                } />

                <Route path='singleDineHome/:diningId' element={
                    <PrivateRoute>
                            <SingleDine />
                    </PrivateRoute>
                } />

                <Route path='studentsPage' element={
                   <PrivateRoute>
                     <div>
                        <Students />
                    </div>
                   </PrivateRoute>
                } />
            </Routes>
        </div>
    );
};

export default AllRoutes;