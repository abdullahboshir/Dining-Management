import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';

const AdminRoute = ({ element }) => {
   
  const { token, isLoading, admin, loading } = useAuth();

  if (loading || isLoading) {
    return <p>Loading..................</p>
}


  if (!token || !admin || loading) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default AdminRoute;
