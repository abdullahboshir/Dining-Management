import React, { createContext, useContext, useEffect, useState } from 'react';
import useAdmin from '../hooks/useAdmin';
import { fetchGlobalDatas } from '../utils/commonApi';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();


export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [studentsData, setStudentsData] = useState([]);
  const [diningDeclaration, setDiningDeclaration] = useState([]);
  const [diningId, setDiningId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  // Declaration Data 
  useEffect(() => {
    const fetchDeclaration = async () => {
      try {
        const response = await fetch('http://localhost:5000/students/declaration');
        const declarationJson = await response.json();


        if (declarationJson.status === 'failed') {
          throw new Error(`GOT A ERROR ${declarationJson.error}`);
        };


        setDiningDeclaration(declarationJson.data);
        setIsLoading(false)
        setError(null);
      } catch (error) {
        setError(error.message);
      }
      finally {
        setIsLoading(false)
      }
    }

    fetchDeclaration()
  }, [diningDeclaration]);

  // console.log('diningIdddddxxxxxxxxx', diningId)


  const login = async (emailOrPhoneNumber, password) => {
    try {
      setIsLoading(true);
      const userData = await fetchGlobalDatas({ emailOrPhoneNumber, password }, 'student/login', 'POST');
      if (!userData) {
        throw new Error('Authentication failed');
      }
      setCurrentUser(userData);
      localStorage.setItem('accessToken', userData?.data?.token);
      setIsLoading(false);
      return userData.data.others;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };



  const handeDineId = (diningId) => {
    setDiningId(diningId)
  };

  const token = localStorage.getItem('accessToken');


  useEffect(() => {
    setIsLoading(true)
    const verifyProfile = async () => {
      try {
        if (!token) {
          throw new Error('Token is not found');
        }

        const response = await fetch('http://localhost:5000/profileVerify', {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Authentication failed');
        }

        const userData = await response.json();
        const isAdmin = userData?.data?.role === 'admin';
        const manager = userData?.data?.role === 'manager';

        if (!(isAdmin || manager)) {
          new error('You are unauthorize')
        } else if (isAdmin || manager) {
          isAdmin && localStorage.setItem('admin', isAdmin)
          manager && localStorage.setItem('manager', manager)
          // localStorage.setItem(isAdmin? ('admin', isAdmin) : ('manager', manager))
        }
        // Set the admin and current user state
        setCurrentUser(userData);
        setIsLoading(false);
      } catch (error) {
        localStorage.clear();
        setCurrentUser(null);
        setStudentsData(null);
        navigate('/home')
        console.error('Error verifying profile:', error.message);
        setIsLoading(false);
      }
    };

    verifyProfile();
  }, [token]);




  const { loading, isAdmin, adminData } = useAdmin(currentUser?.data?.others?.emailOrPhoneNumber);
  // localStorage.setItem('admin', isAdmin);

  const admin = JSON.parse(localStorage.getItem('admin'))
  const manager = JSON.parse(localStorage.getItem('manager'))


  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    setCurrentUser(null);
    setStudentsData(null);
    navigate('/home')
  };



  return (
    <AuthContext.Provider value={{ setCurrentUser, currentUser, diningDeclaration, login, logout, setStudentsData, studentsData, admin, manager, token, loading, handeDineId, diningId, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
