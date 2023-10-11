import Dinings from "../pages/Dinings";
import SingleDine from "../pages/SingleDine";
import StudentProfile from '../pages/StudentProfile';


export const privateRoutes = [
    { path: 'dinings/:diningId', Component: SingleDine},
    { path: 'studentProfile', Component: StudentProfile},
];