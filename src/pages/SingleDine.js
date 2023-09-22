import React, { useEffect, useState } from 'react';
import StudentTable from '../components/dineActivities/StudentTable';
import { useParams } from 'react-router-dom';
import DineNav from '../components/dineActivities/DineNav';
import { useAuthContext } from '../context/AuthContextProvider';

const SingleDine = () => {

    const {diningId} = useParams();
    // console.log('dineeeeeeeeeeeeeeee', diningId)
    
    const {setStudentsData, studentsData} = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


// Student Data 
useEffect(() => {
    const fetchDiningApi = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/students?diningId=${diningId}`);
        if (!response.ok) {
          throw new Error('Network Problem')
        };
        
        const studentJson = await response.json();

        setStudentsData(studentJson.data)
        // console.log('datas are goted', studentsData)
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchDiningApi()
  }, [setStudentsData, studentsData]);



    return (
       <div>
         <DineNav />
      <StudentTable/>
       </div>
    );
};

export default SingleDine;