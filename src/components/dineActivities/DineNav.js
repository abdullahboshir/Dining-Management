import React, { useState } from 'react';
import RegisterStudents from './RegisterStudents';
import DiningFeeModal from './DiningFeeModal';
import CommonCharge from '../shared/CommonCharge';
import Students from '../../pages/Students';
import { Link } from 'react-router-dom';

const DineNav = () => {

    const [commonCharge, setCommonCharge] = useState(false)

    return (
        <div className='h-20 w-full bg-blue-500 flex items-center justify-between'>

            <div className='w-[450px] flex justify-start ml-10'>
                <RegisterStudents/>
            </div>


        <div className='w-[450px] flex justify-center'>
        <div className="form-control w-72">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered w-80" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
        </div>



            <div className='flex justify-end mr-10 w-[450px]'>
                <div className='mr-5'>

                   <Link to='/studentsPage'>
                   <div className='flex-4 flex-col'>
                        <div className=' flex items-center cursor-pointer'>
                            <button className='text-base text-white hover:text-lg duration-200'>Students</button>
                        </div>
                    </div>
                   </Link>
                </div>

                <div>
                <div>
                    {
                        commonCharge && <CommonCharge setCommonCharge={setCommonCharge} />
                    }

                    <div className='flex-4 flex-col'>
                        <div className=' flex items-center cursor-pointer'>
                            <button onClick={() => setCommonCharge(true)} className='text-base text-white hover:text-lg duration-200'>Declaration</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default DineNav;