// useAuthorization.js
import { useAuth } from './AuthContext';

const useAuthorization = (requiredRoles) => {
  const { userRoles } = useAuth();

  const isAuthorized = requiredRoles.every((requiredRole) =>
    userRoles.includes(requiredRole)
  );

  return isAuthorized;
};

export default useAuthorization;
