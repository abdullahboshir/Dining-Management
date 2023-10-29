import { NavLink, useLocation } from "react-router-dom";
import CommonCharge from "./CommonCharge";
import { useState } from "react";
import RegisterStudents from "../dineActivities/RegisterStudents";
import { useAuth } from "../../context/ContextProvider";
import { RxPencil2 } from 'react-icons/rx';
import PostModal from "../dineActivities/PostModal";
// RxPencil2 PiNotePencilLight PiNotePencilBold HiMiniPencilSquare HiOutlinePencilAlt FaPenSquare


const Navbar = () => {
    const { logout, token, admin, manager } = useAuth()
    const [commonCharge, setCommonCharge] = useState(false);
    const [postModalSwitch, setPostModalSwitch] = useState(false);

    const path = useLocation()
    const dineId = path.pathname.split('/')[2];
    const isDineId = path.pathname === `/dinings/${dineId}`;


    return (

        <div className="h-16 w-full bg-blue-500 flex flex-row items-center fixed top-0 z-20 px-5 justify-center">

            <div>
                {postModalSwitch && <PostModal setPostModalSwitch={setPostModalSwitch} />}
            </div>

            <div>
                { commonCharge && <CommonCharge setCommonCharge={setCommonCharge} />}
            </div>



            {
                (admin || manager) && isDineId ? <div className='w-[450px] justify-start'>
                    <RegisterStudents />
                </div> : (admin || manager) && !isDineId && <div className='flex-4 flex-col'>
                    <div className=' flex items-center justify-start cursor-pointer'>

                        <button onClick={() => setPostModalSwitch(true)} className='text-4xl text-white hover:text-5xl duration-200'><RxPencil2 /></button>
                    </div>
                </div>
            }



            {
                (admin || manager) && isDineId && <div className='w-[450px] justify-center'>
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


            <div className={`flex flex-row items-center gap-3 justify-end w-full ${(admin || manager) && !isDineId ? 'w-full' : 'w-[450px]'}`}>

                <ul className="h-16 w-full bg-blue-500 flex items-center justify-end top-0 z-20 gap-3">

                    <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/home '>Home</NavLink></li>
                    {admin && <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/dashboard'>Dashboard</NavLink></li>} {(admin || manager) && <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/students'>Students</NavLink></li>}
                    <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/about'>About</NavLink></li>

                    <li className=' hover:text-lg duration-200 cursor-pointer'>
                        {
                            token ?
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        
                                        <li className=' hover:text-lg duration-200 cursor-pointer'>
                                            <button onClick={() => setCommonCharge(true)}>Declaration</button>
                                        </li>
                                        {
                                            token && <li className=' hover:text-lg duration-200 cursor-pointer'><button onClick={logout}>Logout</button></li>
                                        }
                                    </ul>
                                </div> :
                                <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/login'>Login</NavLink></li>
                        }
                    </li>
                </ul>

            </div>

        </div>







        // <div>
        //     {/* <div className={`h-16 w-full bg-blue-500 flex items-center fixed top-0 z-20 ${(admin || manager) && isDineId? 'justify-between' : 'justify-center'}`}> */}



        //     <div className='navbar h-16 w-full bg-blue-500 flex items-center fixed top-0 z-20 justify-between'>

        //         {
        //             (admin || manager) && !isDineId && <div className='w-[450px] flex justify-start ml-10'>
        //                 +
        //             </div>
        //         }


        //         {
        //             (admin || manager) && isDineId && <div className='w-[450px] flex justify-start ml-10'>
        //                 <RegisterStudents />
        //             </div>
        //         }

        //         {
        //             (admin || manager) && isDineId && <div className='w-[450px] flex justify-center'>
        //                 <div className="form-control w-72">
        //                     <div className="input-group">
        //                         <input type="text" placeholder="Search…" className="input input-bordered w-80 h-10" />
        //                         <button className="btn btn-square btn-sm w-10 h-10">
        //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         }


        //         <div>
        //                     <ul className='flex justify-end mr-10 w-[450px] gap-3 text-base text-white'>
        //                             <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/home'>Home</NavLink></li>
        //                             <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/dashboard'>Dashboard</NavLink></li>
        //                             <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/students'>Students</NavLink></li>
        //                             <li className=' hover:text-lg duration-200 cursor-pointer'>
        //                                 {
        //                                     commonCharge && <CommonCharge setCommonCharge={setCommonCharge} />
        //                                 }
        //                                 <button onClick={() => setCommonCharge(true)}>Declaration</button>
        //                             </li>
        //                             <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/about'>About</NavLink></li>
        //                             {
        //                                 token ? <li className=' hover:text-lg duration-200 cursor-pointer'><button onClick={logout}>Logout</button></li> :
        //                                     <li className=' hover:text-lg duration-200 cursor-pointer'><NavLink to='/login'>Login</NavLink></li>
        //                             }
        //                         </ul>
        //                 </div>
        //             </div>
        //         </div>
    );
};

export default Navbar;

