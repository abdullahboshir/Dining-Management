import React, { useEffect, useState } from 'react';
import StudentTable from '../components/dineActivities/StudentTable';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';

const SingleDine = () => {

    const {diningId} = useParams();
    // console.log('dineeeeeeeeeeeeeeee', diningId)
    
    const {setStudentsData, studentsData} = useAuth();
    const [isLoading, setIsLoading] = useState(true);
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
        console.log('datas are goted', studentJson.data)
        setIsLoading(false)
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchDiningApi()
  }, [setStudentsData, studentsData]);



    return (
       <div className='pt-16'>
      <StudentTable/>
       </div>
    );
};

export default SingleDine;