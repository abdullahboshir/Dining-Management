import React, { createContext, useContext, useEffect, useState } from 'react';

const authContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [studentsData, setStudentsData] = useState([]);
    const [diningDeclaration, setDiningDeclaration] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  


    // Declaration Data 
    useEffect(() => {
        const fetchDeclaration = async () => {
          setIsLoading(true);
          try {
            const response = await fetch('http://localhost:5000/students/declaration');
            const declarationJson = await response.json();

  
            if (declarationJson.status === 'failed') {
              throw new Error(`GOT A ERROR ${declarationJson.error}`);
            };
       

            setDiningDeclaration(declarationJson.data);
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



      



    return (
        <authContext.Provider value={{setStudentsData, studentsData, diningDeclaration, setUser, user}}>
            {children}
        </authContext.Provider>
    );
};



export const useAuthContext = () => {
    return useContext(authContext)
};


