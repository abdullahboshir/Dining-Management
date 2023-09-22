import { useAuthContext } from '../../context/AuthContextProvider';
import useAdmin from '../../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAdmin = ({children}) => {

    
    const userEmail = localStorage.getItem('emailOrNumber');
    
    const admin = useAdmin(userEmail);
    console.log('adminnnnnnnnnnn', admin )



    const location = useLocation();


if(!admin){
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
}

    return (
        children
    );
};

export default RequireAdmin;