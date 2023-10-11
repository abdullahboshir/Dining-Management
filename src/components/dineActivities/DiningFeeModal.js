import React from 'react';
import { fetchGlobalDatas } from '../../utils/commonApi';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/ContextProvider';

const DiningFeeModal = ({ setDineFeeModal, selectedStudentId }) => {

    const {diningId} = useAuth();

console.log('dine iddddddddddddddddzzzzzzzzzz', diningId)
    const handleAddDeposit = (e) => {
        e.preventDefault();
     if(selectedStudentId){
        const maintenanceFee = e.target.maintenanceFee.value;
        const addMoney = e.target.depositMoney.value;
        const addMeal = e.target.addMeal.value;
        

        const DiningFee = {
            diningId,
            maintenanceFee,
            addMoney,
            addMeal
        };

        console.log('valueeeeeeeee', DiningFee)
        const postData = fetchGlobalDatas(DiningFee, `student/updateDiningFee/${selectedStudentId}`, 'PATCH');
        console.log('11111111', postData)
        alert('Student created Successfull', postData)
     }
    };

    return (
        <div className='flex justify-center items-center h-screen w-screen fixed'>


            <button onClick={() => setDineFeeModal(false)} className="btn btn-circle absolute z-10 right-5 top-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>


            <div className='h-screen w-screen bg-black opacity-60 absolute top-0'></div>
            <div className='bg-white h-[430px]  w-[1000px] absolute flex justify-center flex-col overflow-y-auto'>
                <h1 className='text-4xl mb-10'>Add of Dining Fee</h1>

                <form onSubmit={handleAddDeposit}>
                    <div className='flex justify-around'>

                        <div className='grid grid-cols-3 gap-4'>

                            <section>
                                <label className="label">
                                    <div className="text">MAINTENANCE FEE</div>
                                </label>

                                <input type="number" name='maintenanceFee' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onKeyDown={(e) =>
                                    ["ArrowUp", "ArrowDown", "e", "E", "-"].includes(e.key) && e.preventDefault()
                                } />
                            </section>


                            <section>
                                <label className="label">
                                    <div className="text">DEPOSIT MONEY</div>
                                </label>
                                <input name='depositMoney' defaultValue='0' type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </section>

                            <section>
                                <label className="label">
                                    <div className="text">TOTAL MEAL</div>
                                </label>

                                <input type="text" name='addMeal' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
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

export default DiningFeeModal;