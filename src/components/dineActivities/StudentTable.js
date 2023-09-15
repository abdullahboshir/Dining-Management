import React, { useState } from 'react';

import maleAvatar from '../../assets/images/avatar/icon-5359553_640.png';
import DiningFeeModal from './DiningFeeModal';
import { useAuthContext } from '../../context/AuthContextProvider';
import { fetchGlobalDatas } from '../../utils/commonApi';

const StudentTable = () => {

  const { studentsData, diningDeclaration } = useAuthContext();
  const [dineFeeModal, setDineFeeModal] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState('');

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long', locale: 'bn-BD' });


  const mealSwitch = (e, studentId) => {
    const checkedValue = e.target.checked;
    if(checkedValue){
      const postData = fetchGlobalDatas({mealSwitch: 'on'}, `student/mealSwitch/${studentId}`, 'PATCH');
    } else if(!checkedValue){
      const postData = fetchGlobalDatas({mealSwitch: 'off'}, `student/mealSwitch/${studentId}`, 'PATCH');
    }
  };


 
  return (
    <div>

      <div>
        {
          dineFeeModal &&
          <div className='absolute z-20 top-0 right-0 left-0 bottom-0 fixed'>
            <DiningFeeModal setDineFeeModal={setDineFeeModal} selectedStudentId={selectedStudentId} />
          </div>
        }
      </div>



      <div className="overflow-x-auto">
        <table className="table">

          {/* head */}
          <thead>
            <tr className='text-sm text-black text-center'>
              <th className='border-2 py-2 w-16 border-gray-400'></th>
              <th className='border-2 py-2 px-2 w-56 border-gray-400'>Name</th>
              <th className='border-2 py-2 px-2 w-24 border-gray-400'>Department</th>
              <th className='border-2 py-2 px-2 w-32 border-gray-400'>Maintanance Cost</th>
              <th className='border-2 py-2 px-2 w-32 border-gray-400'>Last Month</th>
              <th className='border-2 py-2 px-2 w-32 border-gray-400'>Deposit</th>
              <th className='border-2 py-2 px-2 w-44 border-gray-400'>Meal Info</th>
              <th className='border-2 py-2 px-2 w-16 border-gray-400'>Total Cost</th>
              <th className='border-2 py-2 px-2 w-16 border-gray-400'>Refundable</th>
              <th className='border-2 py-2 px-2 w-16 border-gray-400'>Edit</th>
            </tr>
          </thead>


          <tbody>
            <tr className='text-center'>

              <th className='border-2 w-16 border-gray-400'></th>
              <td className='border-2 py-2 px-2 w-44 border-gray-400'></td>
              <td className='border-2 py-2 px-2 w-24 border-gray-400'></td>

              <th className='border-2 p-0 w-32 border-gray-400'> <td className='border-r-2 w-[64px] py-3 px-2'>Paid</td>  <td className=' w-[64px] py-3 px-2'>Payble</td> </th>

              <th className='border-2 p-0 w-32 border-gray-400'> <td className='border-r-2 w-[64px] py-3 px-2'>Refund</td>  <td className=' w-[64px] py-3 px-2'>Due</td>
              </th>

              <th className='border-2 p-0 w-32 border-gray-400'> <td className='border-r-2 w-[64px] py-3 px-2'>Current</td>  <td className=' w-[58px] py-2 px-2'>Total</td>
              </th>

              <th className='border-2 p-0 w-44 border-gray-400'> <td className='border-r-2 w-[58.67px] py-3 px-2'>Total</td>  <td className=' w-[58.67px] border-r-2 py-3 px-2'>Rate</td> <td className=' w-[58.67px] py-3 px-2'>Fixed</td>
              </th>

              <td className='border-2 py-2 px-2 border-gray-400'></td>
              <td className='border-2 py-2 px-2 border-gray-400'></td>
              <td className='border-2 py-2 px-2 border-gray-400'></td>

            </tr>
          </tbody>




          <tbody>
            {/* row 1 */}
            {
              studentsData.map((data, i) =>
                <tr key={i}>


                  <th className='border-2 w-10 py-2 px-3 border-gray-400'>
                    <label className="cursor-pointer label">
                      <input onClick={(e) => mealSwitch(e, data._id)} type="checkbox" className="toggle toggle-success" disabled={data.mealInfo[currentYear][currentMonth].currentDeposit <= 100} defaultChecked={data.mealInfo[currentYear][currentMonth].mealStatus === 'on'} />
                    </label>

                  </th>


                  <td className='border-2 py-2 px-2 border-gray-400'>
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
                  </td>

                  <td className='border-2 py-2 px-2 w-28 border-gray-400 text-black'>
                    <span className=' text-sm'> {
                      data.department
                    }</span>
                    <br />
                    <span className="text-base">{data.session}</span>
                  </td>


                  <th className='border-2 border-r-0 border-t-0 p-0 w-32 border-gray-400'> <td className='border-r-2  py-[22px] px-2 w-[64px]'>{diningDeclaration.maintenanceCharge}</td>  <td className='w-[64px] py-[22px] px-2 '>1050</td> </th>

                  <th className='border-2 p-0 w-32 border-gray-400'> <td className='border-r-2 w-[64px] py-[22px] px-2'>570</td><td className='w-[64px] py-[22px] px-2'>160</td>
                  </th>

                  <th className='border-2 p-0 w-32 border-gray-400'> <td className='border-r-2 w-[64px] py-[22px] px-2 pl-[26px]'>{data.mealInfo[currentYear][currentMonth].currentDeposit}</td>  <td className={data.mealInfo[currentYear][currentMonth].totalDeposit? 'w-[64px] py-[22px] px-2': 'text-red-500'}>{data.mealInfo[currentYear][currentMonth].totalDeposit}</td>
                  </th>

                  <th className='border-2 p-0 w-44 border-gray-400'> <td className='border-r-2  w-[58px] py-[22px] px-2'>{data.mealInfo[currentYear][currentMonth].totalMeal}</td>  <td className='  w-[58px] py-[22px] px-2 border-r-2'>{diningDeclaration.mealCharge}</td> <td className='  w-[58px]  py-[22px] px-2'>01</td>
                  </th>

                  <th className='border-2 p-0 w-18 py-[22px] px-2 border-gray-400'>{data.mealInfo[currentYear][currentMonth].totalCost}</th>
                  <th className='border-2 p-0 w-18 py-[22px] px-2 border-gray-400'>560</th>

                  <th className='border-2 border-gray-400 w-12'>
                    <button onClick={() => { setDineFeeModal(true); setSelectedStudentId(data._id); }} className="btn btn-ghost btn-xs">Add</button>

                  </th>
                </tr>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};


export default StudentTable;