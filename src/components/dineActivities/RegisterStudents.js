import React, { useState } from 'react';
import { RiUserAddFill } from 'react-icons/ri';
import Register from './Register';

const RegisterStudents = () => {
    const [dineRegisterModal, setDineRegisterModal] = useState(false);

    return (
        <div>

{
                dineRegisterModal &&
                <div className='absolute z-50 top-0 right-0 left-0 bottom-0'>
                    <Register setDineRegisterModal={setDineRegisterModal} />
                </div>
            }


              <div className='flex-4 flex-col'>
                    <div className=' flex items-center justify-start cursor-pointer'>
                        <button onClick={() => setDineRegisterModal(true)} className='text-4xl text-white hover:text-5xl duration-200'><RiUserAddFill /></button>
                    </div>
                </div>
        </div>
    );
};

export default RegisterStudents;