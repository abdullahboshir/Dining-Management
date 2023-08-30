import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import SingleDine from '../pages/SingleDine';

const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='singleDineHome' element={<SingleDine />} />
            </Routes>
        </div>
    );
};

export default AllRoutes;