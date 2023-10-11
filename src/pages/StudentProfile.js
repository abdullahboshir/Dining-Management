import React, { useEffect } from 'react';
import image from '../assets/images/processing1111.png';
import circle from '../assets/images/circle.png';
import '../assets/css/Students_meal_Switch.css';
import { useAuth } from '../context/ContextProvider';


const StudentProfile = () => {
    const { diningDeclaration } = useAuth();


    useEffect(() => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        console.log('checkboxxxxx', checkboxes)
        const hr = document.querySelector('hr');

        function toggleAll(isEnabled) {
            checkboxes.forEach((otherCheckbox) => {
                otherCheckbox.checked = isEnabled;
            });
            hr.classList.toggle('enabled', isEnabled);
        }

        document.body.addEventListener('click', () => {
            toggleAll(!checkboxes[0].checked);
        });

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('click', (event) => {
                toggleAll(checkbox.checked);
                event.stopPropagation();
            });
        });

        // Clean up event listeners when the component unmounts
        return () => {
            document.body.removeEventListener('click', () => {
                toggleAll(!checkboxes[0].checked);
            });

            checkboxes.forEach((checkbox) => {
                checkbox.removeEventListener('click', (event) => {
                    toggleAll(checkbox.checked);
                    event.stopPropagation();
                });
            });
        };
    }, []);





    return (
        <div className='flex justify-center'>
            <container className='w-1/2 bg-[#EBE8E7] items-center flex flex-col pb-16'>

                <div className='w-full h-72 bg-gradient-to-t from-[#EBE8E7] to-cyan-200 flex flex-col justify-center items-center relative overflow-hidden '>

                    <div className='w-full flex justify-center items-center'>
                        <div className='text-white absolute z-10 flex flex-col justify-center items-center'>
                            <h2 className='text-2xl text-blue-900 font-bold'>MAHMUDUL HASSAN RAKIB</h2>
                            <div className='relative h-40 w-40 flex justify-center items-center mb-16'>
                                <img className='absolute w-[66%] h-[66%]' src='https://ddgobkiprc33d.cloudfront.net/5c20071a-c083-4548-b3b8-874dd092647e.png' />
                                <img className='absolute w-[82%] h-[82%]' src={circle} />
                            </div>

                        </div>


                        <div className='w-[470px] h-[3px] bg-blue-900 rounded-[70px] -rotate-45 absolute -right-[165px] top-0'></div>
                        <div className='w-[430px] h-[3px] bg-blue-900 rounded-[70px] -rotate-45 absolute -right-[165px] top-0'></div>
                        <div className='w-[390px] h-[3px] bg-blue-900 rounded-[70px] -rotate-45 absolute -right-[165px] top-0'></div>
                        <div className='w-[350px] h-[3px] bg-blue-900 rounded-[70px] -rotate-45 absolute -right-[165px] top-0'></div>


                        <div className='flex justify-center items-center overflow-hidden'>
                            <div className='w-[400px] h-[400px] bg-[#ADD037] rounded-b-[80px] rotate-45 -top-64 absolute'></div>
                            <div className='absolute -top-[0px] w-[375px] opacity-5'> <img src={image} /></div>
                        </div>


                        <div className='w-[470px] h-[3px] bg-blue-900 rounded-[70px] rotate-45 absolute -left-[165px] top-0'></div>
                        <div className='w-[430px] h-[3px] bg-blue-900 rounded-[70px] rotate-45 absolute -left-[165px] top-0'></div>
                        <div className='w-[390px] h-[3px] bg-blue-900 rounded-[70px] rotate-45 absolute -left-[165px] top-0'></div>
                        <div className='w-[350px] h-[3px] bg-blue-900 rounded-[70px] rotate-45 absolute -left-[165px] top-0'></div>
                    </div>


                    <div className='absolute w-[95%] flex justify-between items-center top-52 z-10'>
                        <div className='h-16 w-28 bg-gray-400 rounded-lg flex items-center justify-center text-4xl text-white font-semibold'><span>1250</span></div>
                        <div>
                            <div className="switch-container">
                                <input type="checkbox" className='custom-checkbox' />
                                <div className="switch">
                                    <div className="nubbin"></div>
                                </div>
                            </div>

                            <div className="switch-container">
                                <input type="checkbox" className='custom-checkbox' />
                                <div className="switch">
                                    <div className="nubbin"></div>
                                </div>
                            </div>
                            <hr />
                        </div>

                        <div className='h-16 w-28 bg-gray-400 rounded-lg flex items-center justify-center text-4xl text-white font-semibold'><span>365</span></div>
                    </div>


                    {/* <div className='w-full h-72 bg-emerald-500 absolute' style={{'clip-path': 'polygon(0 82%, 130% 0, 0 0)'}}></div>
                    <div className='w-full h-full bg-red-500 absolute' style={{'clip-path': 'polygon(0 82%, 130% 0, 0 0)', transform:('scaleX(-1) scaleY(-1)')}}></div> */}
                </div>

                <div className='h-44 w-[95%] bg-gray-300 rounded-lg p-2'>
                    <h2 className='text-xl font-bold'>MEAL INFORMATION</h2>

                    <div className='grid grid-cols-3 gap-4 text-start mt-3'>
                        <div>
                            <p>Student Id : 36501</p>
                            <p> Room number : 36501</p>
                            <p>Student Id : 36501</p>
                            <p>Student Id : 36501</p>
                        </div>

                        <div>
                            <p>Student Id  : 36501</p>
                            <p> Room number : 36501</p>
                            <p>Student Id : 36501</p>
                            <p>Student Id : 36501</p>
                        </div>

                        <div>
                            <p>Student Id   : 36501</p>
                            <p> Room number : 36501</p>
                            <p>Student Id   : 36501</p>
                            <p>Student Id   : 36501</p>
                        </div>

                    </div>
                </div>


                <div className='h-44 w-[95%] bg-gray-300 rounded-lg p-2 mt-5'>
                    <h2 className='text-xl font-bold'>STUDENT IDENTITY</h2>

                    <div className='grid grid-cols-3 gap-4 text-start mt-3'>
                        <div>
                            <p>Student Id : 36501</p>
                            <p> Room number : 36501</p>
                            <p>Student Id : 36501</p>
                            <p>Student Id : 36501</p>
                        </div>

                        <div>
                            <p>Student Id  : 36501</p>
                            <p> Room number : 36501</p>
                            <p>Student Id : 36501</p>
                            <p>Student Id : 36501</p>
                        </div>

                        <div>
                            <p>Student Id   : 36501</p>
                            <p> Room number : 36501</p>
                            <p>Student Id   : 36501</p>
                            <p>Student Id   : 36501</p>
                        </div>

                    </div>
                </div>
            </container>

        </div>
    );
};

export default StudentProfile;