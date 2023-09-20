import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContextProvider';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsBuildingsFill } from 'react-icons/bs';
import DineRegisterForm from '../components/create dine/DineRegisterForm';
import { Link } from 'react-router-dom';

const Home = () => {
    const [dineRegisterModal, setDineRegisterModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [allDinings, setAllDinings] = useState([]);



    useEffect(() => {
        const fetchDiningApi = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:5000/dinings');
                if (!response.ok) {
                    throw new Error('Network Problem')
                };
                const jsonData = await response.json();

                setAllDinings(jsonData.data)

                setError(null);
            } catch (error) {
                  console.log('thsi sssss1111111111111sssss', error.message)
                setError(error.message);
            }
        }

        fetchDiningApi()
    }, [allDinings]);



    return (
        <div className='relative h-screen w-screen overflow-x-hidden'>


            {
                dineRegisterModal &&
                <div className='absolute top-0 right-0 left-0 bottom-0'>

                    <button onClick={() => setDineRegisterModal(false)} className="btn btn-circle absolute z-10 right-5 top-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    <DineRegisterForm />
                </div>
            }



            <div className='pt-5 pl-5 grid grid-cols-5 gap-4 w-screen '>

                    {
                        allDinings?.map((dinings, i) => (
                         <div className='flex flex-col'>
                               <div className='w-52 h-60 flex border-4 flex-col'>

                                <div className=' w-52 h-52 flex items-center justify-center cursor-pointer'> 
                                  
                                   <Link to={`/singleDineHome/${dinings._id}`}  className='text-6xl text-green-600 hover:text-7xl duration-200'><BsBuildingsFill /></Link>
                                   
                                </div>
                                
                                <div className='bg-gray-100 w-46 h-12 text-lg font-bold pt-2'><p>{dinings?.diningName}</p></div>
                            </div>
                         </div>
                        ))
                    }
             




                <div className='w-52 h-60 flex border-4 flex-col'>
                    <div className=' w-52 h-52 flex items-center justify-center cursor-pointer'>
                        <button onClick={() => setDineRegisterModal(true)} className='text-6xl text-green-600 hover:text-7xl duration-200'><AiFillPlusCircle /></button>
                    </div>
                    <div className='bg-gray-100 w-46 h-12 text-lg font-bold pt-2'><p>Create a new Dining</p></div>
                </div>


            </div>


            {/* <SingleDine /> */}
        </div>
    );
};

export default Home;