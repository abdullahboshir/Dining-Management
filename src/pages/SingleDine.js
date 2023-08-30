import React from 'react';
import DineNav from '../components/dineActivities/DineNav';
import StudentTable from '../components/dineActivities/StudentTable';

const SingleDine = () => {
    return (
       <div>

      <div>
      <DineNav/>
      </div>

      <div>
      <StudentTable/>
      </div>
      
       </div>
    );
};

export default SingleDine;