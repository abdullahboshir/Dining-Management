import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import SingleDine from '../pages/SingleDine';
import Students from '../pages/Students';
import DineNav from '../components/dineActivities/DineNav';

const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='singleDineHome' element={
                    <div>
                        <DineNav />
                        <SingleDine />
                    </div>
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