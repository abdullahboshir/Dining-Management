import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SetPassword from "../pages/SetPassword";


export const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/home', Component: Home },
    { path: '/signUp', Component: SetPassword },
    { path: '/login', Component: Login },
    { path: '/about', Component: About },
    { path: '*', Component: NotFound },
]