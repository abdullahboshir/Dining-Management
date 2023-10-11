// import React from 'react';
// import Home from '../pages/Home';
// import { Route, Routes } from 'react-router-dom';
// import SingleDine from '../pages/SingleDine';
// import Students from '../pages/Students';
// import DineNav from '../components/dineActivities/DineNav';
// import Login from '../pages/Login';
// import SetPassword from '../pages/SetPassword';
// import PrivateRoute from '../components/require_auth/PrivateRoute';
// import NotFound from '../pages/NotFound';
// import useAdmin from '../hooks/useAdmin';
// import Dinings from '../pages/Dinings';
// import StudentInput from '../components/test/StudentInput';
// import StudentInputCall from '../components/test/StudentInputCall';




 

// const AllRoutes = () => {

//     return (
//         <div>
//             <Routes>


//                 <Route path='/' element={<Home />} />
//                 <Route path='home' element={<Home />} />
//                 {/* <Route path='studentInput' element={<StudentInput />} /> */}
//                 <Route path='studentInputCall' element={<StudentInputCall />} />

               


//                 <Route path='login' element={<Login />} />

//                 <Route path='setPassword' element={
//                     <PrivateRoute>
//                         <SetPassword />
//                     </PrivateRoute>
//                 } />

//                 <Route path='singleDineHome/:diningId' element={
//                     <PrivateRoute>
//                         <SingleDine />
//                     </PrivateRoute>
//                 } />

//                 <Route path='studentsPage' element={
//                     <PrivateRoute>
//                         <div>
//                             <Students />
//                         </div>
//                     </PrivateRoute>
//                 } />

//                 <Route path='*' element={<NotFound />} />
//             </Routes>
//         </div>
//     );
// };

// export default AllRoutes;