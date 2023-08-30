import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const authContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [studentsData, setStudentsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  


    // Student Data 
    useEffect(() => {
        const fetchDiningApi = async () => {
          setIsLoading(true);
          try {
            const response = await fetch('http://localhost:5000/students');
            if (!response.ok) {
              throw new Error('Network Problem')
            };
            
            const studentJson = await response.json();
    
            setStudentsData(studentJson.data)
            setError(null);
          } catch (error) {
            console.log('thsi sssss1111111111111sssss', error.message)
            setError(error.message);
          }
        }
    
        fetchDiningApi()
      }, [studentsData]);




    return (
        <authContext.Provider value={{studentsData}}>
            {children}
        </authContext.Provider>
    );
};



export const useAuthContext = () => {
    return useContext(authContext)
};


