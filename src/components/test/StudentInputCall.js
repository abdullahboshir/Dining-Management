import React, { useState } from 'react';

const StudentInputCall = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
      const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log('got dataaaaa:', formData);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('finally got dataaaaa:', formData);
    // Validate the input values
    const errors = {};
    if (!formData.studentId) {
        errors.studentId = 'Student ID is required';
    }
    if (!formData.studentName) {
        errors.studentName = 'Student Name is required';
    }
    if (!formData.roomNumber) {
        errors.roomNumber = 'Room Number is required';
    }
    
    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Submit the form
    } else {
      // Display the errors to the user
      console.log('Errors:', errors);
    }
  };


  const commonStle = "input input-bordered input-success w-full h-10 max-w-xs mb-4";
  const inputFields = [
    { name: 'studentId', type: 'text', label: 'Student ID', commonStle },
    { name: 'studentName', type: 'text', label: 'Student Name', commonStle },
    { name: 'roomNumber', type: 'number', label: 'Room Number', commonStle}
  ];


//   inputFields.map(name => {
//     // console.log('ssssssssss', (name.name).style.background = 'red'))
//       const usernameInput = document.getElementById(name.name);
//       usernameInput?.style?.color = 'red';
//   })



  return (
    <div>
      <h1 className='mt-5 mb-5'>This is Student input call</h1>

      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-3 place-items-center'>
          {inputFields.map((field) => (

            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>

              <input
                className={field.commonStle}
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <button type='submit' className='btn bg-gray-400'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentInputCall;






// import React from 'react';
// import StudentInput from './StudentInput';

// const StudentInputCall = () => {

//     const handelSubmit = (e) => {
//         e.preventDefault();
        
//         // Create a new FormData object from the form element
//         const formData = new FormData(e.target);
      
//         // Access the value of the input with the name "studentId"
//         const studentId = formData.get('studentId');
//         const studentName = formData.get('studentName');
//         const roomNumber = formData.get('roomNumber');
        
//         // Now you can use the studentId value as needed
//         console.log('Student ID:', studentId, studentName, roomNumber);
//       };


//     return (
//         <>
//             <h1 className='mt-5 mb-5'>This is Student input call</h1>
//            <form onSubmit={handelSubmit}>
//            <div className='grid grid-cols-3 place-items-center'>
//                 <StudentInput studentId={'studentId'} text={"text"}  />
//                 <StudentInput studentId={'studentName'} text={"text"}  />
//                 <StudentInput studentId={'roomNumber'} text={"number"}  />
//             </div>
//             <button type='btn bg-red-400'>Submit</button>
//            </form>
//         </>
//     );
// };

// export default StudentInputCall;