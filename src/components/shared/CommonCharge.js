import React from 'react';
import { fetchGlobalDatas } from '../../utils/commonApi';

const CommonCharge = ({ setCommonCharge }) => {

   
    const handleAddDeposit = (e) => {
        e.preventDefault();
      
            const maintenanceCharge = parseInt(e.target.maintenanceFee.value);
            const mealCharge = parseInt(e.target.mealCharge.value);
            const fixedMealCharge = e.target.fixedMealCharge.value;
            const noticeBoard = e.target.noticeBoard.value;

              console.log('checkkkkkkkkk', typeof(maintenanceCharge))
            const diningDeclaration = {
                maintenanceCharge,
                mealCharge,
                fixedMealCharge,
                noticeBoard
            };
          

            const declarationRes = fetchGlobalDatas(diningDeclaration, `students/declaration/`, 'POST');
            alert('Student created Successfull', declarationRes)
    };

    return (
        <div className='absolute h-screen w-screen flex justify-center items-center top-0 right-0 z-30'>

            <button onClick={() => setCommonCharge(false)} className="btn btn-circle absolute z-10 right-5 top-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>


            <div className='absolute h-screen w-screen backdrop-blur-[1px] bg-black/50 top-0 right-0'></div>
            <div className='bg-white h-[430px]  w-[1000px] absolute flex justify-center flex-col overflow-y-auto py-10 px-28'>
                <h1 className='text-4xl mb-10 pt-5'>Add Meal Charge for Students</h1>

                <form onSubmit={handleAddDeposit}>
                    <div className='flex justify-around flex-col'>

                        <div className='grid grid-cols-3 gap-4'>


                        <section>
                                <label className="label">
                                    <div className="text">Maintenance Charge</div>
                                </label>

                                <input type="number" name='maintenanceFee' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onKeyDown={(e) =>
                                    ["ArrowUp", "ArrowDown", "e", "E", "-"].includes(e.key) && e.preventDefault()
                                } />
                            </section>


                            <section>
                                <label className="label">
                                    <div className="text">Meal Charge</div>
                                </label>

                                <input type="number" name='mealCharge' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onKeyDown={(e) =>
                                    ["ArrowUp", "ArrowDown", "e", "E", "-"].includes(e.key) && e.preventDefault()
                                } />
                            </section>


                            <section>
                                <label className="label">
                                    <div className="text">Fixed Meal Charge</div>
                                </label>
                                <input name='fixedMealCharge' type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </section>

                        </div>

                        <section className='flex flex-col items-center mt-5'>
                                <label className="label">
                                    <div className="text">Add a Notice</div>
                                </label>

                                <textarea name='noticeBoard' placeholder="Add Notice" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                            </section>



                    </div>
                    {/* <p>{error}</p> */}
                    <button type="submit" className='btn mt-10'>Submit</button>
                </form>

            </div>
        </div>
    );
};

export default CommonCharge;