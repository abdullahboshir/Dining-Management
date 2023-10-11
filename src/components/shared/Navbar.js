import { NavLink } from "react-router-dom";
import CommonCharge from "./CommonCharge";
import { useState } from "react";
import RegisterStudents from "../dineActivities/RegisterStudents";
import { useAuth } from "../../context/ContextProvider";


const Navbar = () => {

    const { logout, token, admin, manager } = useAuth()

    const [commonCharge, setCommonCharge] = useState(false);


    return (
        <div>
            <div className={`h-16 w-full bg-blue-500 flex items-center fixed top-0 z-20 ${admin || manager? 'justify-between' : 'justify-center'}`}>

                {
                    (admin || manager) && <div className='w-[450px] flex justify-start ml-10'>
                    <RegisterStudents />
                </div>
                }

                {
                   (admin || manager) && <div className='w-[450px] flex justify-center'>
                     <div className="form-control w-72">
                         <div className="input-group">
                             <input type="text" placeholder="Search…" className="input input-bordered w-80 h-10" />
                             <button className="btn btn-square btn-sm w-10 h-10">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                             </button>
                         </div>
                     </div>
                 </div>
                }
               

                <div>
                    <ul className='flex justify-end mr-10 w-[450px] gap-3 text-base text-white'>
                        <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/home'>Home</NavLink></li>
                        <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/students'>Students</NavLink></li>
                        <li className=' hover:text-lg duration-200 cursor-pointer'>
                            {
                                commonCharge && <CommonCharge setCommonCharge={setCommonCharge} />
                            }
                            <button onClick={() => setCommonCharge(true)}>Declaration</button>
                        </li>
                        <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/about'>About</NavLink></li>
                        {
                            token ? <li className=' hover:text-lg duration-200 cursor-pointer'><button onClick={logout}>Logout</button></li> :
                                <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/login'>Login</NavLink></li>
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;

