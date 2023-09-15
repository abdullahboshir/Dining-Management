import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import SingleDine from '../pages/SingleDine';
import Students from '../pages/Students';
import DineNav from '../components/dineActivities/DineNav';
import Login from '../pages/Login';
import SetPassword from '../pages/SetPassword';




const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='setPassword' element={<SetPassword />} />
                <Route path='singleDineHome' element={
                    <privateRoute>
                        <div>
                        <DineNav />
                        <SingleDine />
                    </div>
                    </privateRoute>
                } />
                <Route path='studentsPage' element={
                <div>
                    <DineNav/>
                    <Students />
                </div>
            } />
            </Routes>
        </div>
    );
};

export default AllRoutes;