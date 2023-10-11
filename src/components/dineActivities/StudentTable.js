import React, { useState } from 'react';

import maleAvatar from '../../assets/images/avatar/icon-5359553_640.png';
import DiningFeeModal from './DiningFeeModal';
import { fetchGlobalDatas } from '../../utils/commonApi';
import { useAuth } from '../../context/ContextProvider';

const StudentTable = () => {
  const {diningId} = useAuth();
  // const {diningId} = useParams();
  const { studentsData, diningDeclaration } = useAuth();
  const [dineFeeModal, setDineFeeModal] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState('');
  // console.log('dining idddddddddddd from studentTabne', diningId)

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long', locale: 'bn-BD' });


  const mealSwitch = (e, studentId) => {
    try {
      const checkedValue = e.target.checked;

      if (checkedValue) {
        const postData = fetchGlobalDatas({ diningId, mealSwitch: 'on' }, `student/mealSwitch/${studentId}`, 'PATCH');
      } else if (!checkedValue) {
        const postData = fetchGlobalDatas({ diningId, mealSwitch: 'off' }, `student/mealSwitch/${studentId}`, 'PATCH');
      }
    } catch (error) {
      console.log('Eorror from student table in Meal Switch', error.message)
    }
  };



  return (
    <div className='flex justify-center -z-10'>

      <div>
        {
          dineFeeModal &&
          <div className='absolute z-20 top-0 right-0 left-0 bottom-0 fixed'>
            <DiningFeeModal setDineFeeModal={setDineFeeModal} selectedStudentId={selectedStudentId} />
          </div>
        }
      </div>


      <div>
        <div className='grid grid-flow-col auto-cols-max'>
          <div className='bg-gray-200 w-20 p-1 border-r-2 border-y-2 border-gray-400'></div>
          <div className='bg-gray-200 w-64 p-2 border-r-2 border-y-2 border-gray-400'><p>Name</p></div>
          <div className='bg-gray-200 w-[120px] p-2 border-r-2 border-y-2 border-gray-400'><p>Department</p></div>
          <div className='bg-gray-200 w-36 p-1 border-r-2 border-y-2 border-gray-400'><p>Maintanance Cost</p></div>
          <div className='bg-gray-200 w-32 p-2 border-r-2 border-y-2 border-gray-400'><p>Last Month</p></div>
          <div className='bg-gray-200 w-36 p-2 border-r-2 border-y-2 border-gray-400'><p>Deposit</p></div>
          <div className='bg-gray-200 w-40 p-2 border-r-2 border-y-2 border-gray-400'><p>Meal Info</p></div>
          <div className='bg-gray-200 w-[90px] border-r-2 border-y-2 border-gray-400 p-2'><p>Total Cost</p></div>
          <div className='bg-gray-200 w-24 p-2 border-r-2 border-y-2 border-gray-400'><p>Refundable</p></div>
          <div className='bg-gray-200 w-[60px] p-2  border-y-2 border-gray-400'><p>Edit</p></div>
        </div>



        <div className='grid grid-flow-col auto-cols-max border-b-2 border-gray-400'>
          <div className='bg-gray-200 w-20 p-1 border-r-2 border-gray-400'></div>
          <div className='bg-gray-200 w-64 p-2 border-r-2 border-gray-400'></div>
          <div className='bg-gray-200 w-[120px] p-2 border-r-2 border-gray-400'></div>

          <div className='grid w-36 grid-cols-2'>
            <span className='bg-gray-200 p-2 border-r-2 border-gray-400'>Paid</span>
            <span className='bg-gray-200 p-2 border-r-2 border-gray-400'>Payble</span>
          </div>

          <div className='grid w-32 grid-cols-2'>
            <span className='bg-gray-200 p-2 border-r-2 border-gray-400'>Refund</span>
            <span className='bg-gray-200 p-2 border-r-2 border-gray-400'>Due</span>
          </div>


          <div className='grid w-36 grid-cols-2'>
            <span className='bg-gray-200 p-2 border-r-2 border-gray-400'>Current</span>
            <span className='bg-gray-200 p-2 border-r-2 border-gray-400'>Total</span>
          </div>


          <div className='grid w-40 grid-cols-3'>
            <span className='bg-gray-200 p-2 border-r-2 border-gray-400'>Rate</span>
            <span className='bg-gray-200 p-2 border-r-2 border-gray-400'>Fixed</span>
            <span className='bg-gray-200 p-2 border-r-2 border-gray-400'>Total</span>
          </div>

          <div className='bg-gray-200 w-[90px] p-2 border-r-2 border-gray-400'></div>
          <div className='bg-gray-200 w-24 p-2 border-r-2 border-gray-400'></div>
          <div className='bg-gray-200 p-2 w-[60px] '></div>
        </div>



        {
          studentsData?.map((data, i) =>

            <div className='grid grid-flow-col auto-cols-max border-b-2 bg-gray-200 border-gray-400'>
              <div className='bg-gray-200 w-20 flex justify-center items-center h-[68px] p-2 border-r-2 border-gray-400'>
                <label className="cursor-pointer label">
                  <input onClick={(e) => mealSwitch(e, data._id)} type="checkbox" className="toggle toggle-success" disabled={data.mealInfo[currentYear][currentMonth].currentDeposit <= 100} defaultChecked={data.mealInfo[currentYear][currentMonth].mealStatus === 'on'} />
                </label>
              </div>

              <div className='bg-gray-200 w-64 p-2 border-r-2 border-gray-400'>
                {
                  <div>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={maleAvatar} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.name}</div>
                        <div className="text-lg opacity-80">{data.studentId} / {data?.studentPin}</div>
                      </div>
                    </div>
                  </div>
                }
              </div>

                {
              <div className='bg-gray-200 w-[120px] h-[68px] grid grid-rows-2 justify-center items-center p-2 border-r-2 border-gray-400'>
                    <div className=' text-sm'>{data.department}</div>
                    <div className="text-base">{data.session}</div>
              </div>
                }


              <div className='grid w-36 h-[68px] grid-cols-2 justify-center items-center'>
                <span className='bg-gray-200 p-2 border-r-2 h-[68px] border-gray-400 flex justify-center items-center'>{diningDeclaration.maintenanceCharge}</span>
                <span className='bg-gray-200 p-2 h-[68px] border-gray-400 border-r-2 flex justify-center items-center'>1000</span>
              </div>

              <div className='grid w-32 h-[68px] grid-cols-2 justify-center items-center'>
                <span className='bg-gray-200 h-[68px] flex justify-center items-center p-2 border-r-2 border-gray-400'>570</span>
                <span className='bg-gray-200 h-[68px] flex justify-center items-center p-2 border-r-2 border-gray-400'>160</span>
              </div>


              <div className='grid w-36 h-[68px] grid-cols-2'>
                <span className='bg-gray-200 p-2 border-r-2 border-gray-400 h-[68px] flex justify-center items-center'>{data.mealInfo[currentYear][currentMonth].currentDeposit}</span>
                <span className={data.mealInfo[currentYear][currentMonth].totalDeposit ? 'bg-gray-200 p-2 border-r-2 border-gray-400 h-[68px] flex justify-center items-center' : 'text-red-500 bg-gray-200 border-r-2 border-gray-400 h-[68px] flex justify-center items-center'}>160</span>
              </div>


              <div className='grid w-40 h-[68px] grid-cols-3'>
                <span className='bg-gray-200 p-2 border-r-2 border-gray-400 h-[68px] flex justify-center items-center'>{diningDeclaration.mealCharge}</span>
                <span className='bg-gray-200 p-2 border-r-2 border-gray-400 h-[68px] flex justify-center items-center'>01</span>
                <span className='bg-gray-200 p-2 border-r-2 border-gray-400 h-[68px] flex justify-center items-center'>{data.mealInfo[currentYear][currentMonth].totalMeal}</span>
              </div>

              <div className='bg-gray-200 w-[90px] h-[68px] flex justify-center items-center p-2 border-r-2 border-gray-400'>{data.mealInfo[currentYear][currentMonth].totalCost}</div>

              <div className='bg-gray-200 w-24 h-[68px] flex justify-center items-center p-2 border-r-2 border-gray-400'>560</div>

              <div className='bg-gray-200 p-2 w-[60px] h-[68px] flex justify-center items-center'>
                <button onClick={() => { setDineFeeModal(true); setSelectedStudentId(data._id); }} className="btn btn-ghost btn-xs">Add</button>
              </div>
              
            </div>
          )
        }

      </div>
    </div >
  );
};


export default StudentTable;