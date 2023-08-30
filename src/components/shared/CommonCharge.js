import React from 'react';
import { fetchGlobalDatas } from '../../utils/commonApi';

const CommonCharge = ({ setCommonCharge }) => {

    const selectedStudentId = true;
    const handleAddDeposit = (e) => {
        e.preventDefault();
        if (selectedStudentId) {
            const mealCharge = e.target.mealCharge.value;
            const fixedMealCharge = e.target.fixedMealCharge.value;
            console.log('checkkkkkkkkk', typeof(mealCharge))

            const DiningFee = {
                mealCharge,
                fixedMealCharge

            };

            console.log('valueeeeeeeee', DiningFee)
            const postData = fetchGlobalDatas(DiningFee, `students/setMealCharge/`, 'PATCH');
            console.log('11111111', postData)
            alert('Student created Successfull', postData)
        }
    };

    return (
        <div className='flex justify-center items-center h-screen w-screen fixed absolute z-10 top-0 right-0 left-0 bottom-0'>


            <button onClick={() => setCommonCharge(false)} className="btn btn-circle absolute z-10 right-5 top-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>


            <div className='h-screen w-screen bg-black opacity-60 absolute top-0'></div>
            <div className='bg-white h-[430px]  w-[1000px] absolute flex justify-center flex-col overflow-y-auto'>
                <h1 className='text-4xl mb-10'>Add Meal Charge for Students</h1>

                <form onSubmit={handleAddDeposit}>
                    <div className='flex justify-around'>

                        <div className='grid grid-cols-2 gap-4'>

                            <section>
                                <label className="label">
                                    <div className="text">Meal Charge</div>
                                </label>

                                <input type="text" name='mealCharge' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onKeyDown={(e) =>
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
                    </div>
                    {/* <p>{error}</p> */}
                    <button type="submit" className='btn mt-10'>Submit</button>
                </form>

            </div>
        </div>
    );
};

export default CommonCharge;