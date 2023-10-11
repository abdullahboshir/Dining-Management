import React, { useEffect, useState } from 'react';
import { fetchGlobalDatas, fetchLocalDatas } from '../../utils/commonApi';
import { checkIsArray, findLocation } from '../../utils/commonFunction';

const Register = () => {
    const [division, setDivision] = useState([]);
    const [district, setDistrict] = useState([]);
    const [upazilla, setUpazilla] = useState([]);
    const [union, setUnion] = useState([]);

    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazilla, setSelectedUpazilla] = useState('');
    const [selectedUnion, setSelectedUnion] = useState('');



    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const [divisionRes, districtRes, upazillaRes, unionsRes] = await Promise.all([
                    fetchLocalDatas('/divisions.json'),
                    fetchLocalDatas('/districts.json'),
                    fetchLocalDatas('/upazilas.json'),
                    fetchLocalDatas('/unions.json')
                ]);

                setDivision(divisionRes[2].data);
                setError(null);


                if (selectedDivision) {
                    const divisionId = findLocation(divisionRes[2], districtRes[2], selectedDivision);
                    const districtId = findLocation(districtRes[2], upazillaRes[2], selectedDistrict);
                    const upazilaId = findLocation(upazillaRes[2], unionsRes[2], selectedUpazilla);


                    if (divisionId && districtId && upazilaId) {
                        setDistrict(divisionId);
                        setUpazilla(districtId);
                        setUnion(upazilaId);
                    }
                    else {
                        setDistrict([]);
                        setUpazilla([]);
                        setUnion([]);
                        console.error('Something is wrong')
                    }
                }

            } catch (error) {
                setError(error.message);
                setDivision([]);
                setDistrict([]);
                setUpazilla([]);
                setUnion([]);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [selectedDivision, selectedDistrict, selectedUpazilla]);



    if (isLoading) {
        // return <Loading />;
    }
    else if (error) {
        return <div>Error: {error}</div>;
    }


    // Check is array?
    checkIsArray(division)
    checkIsArray(district)
    checkIsArray(upazilla)
    checkIsArray(union)




    const handleDingingRegister = (e) => {
      try {
        e.preventDefault();
        const diningName = e.target.dineName.value;
        const divisionValue = selectedDivision;
        const districtValue = selectedDistrict;
        const subDistrictValue = selectedUpazilla;
        const allianceValue = selectedUnion;
        const seatsNumber = e.target.seatsNumber.value;
        const emailOrPhoneNumber = e.target.emailOrPhoneNumber.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        const newDining = {
            diningName,
            divisionValue,
            districtValue,
            subDistrictValue,
            allianceValue,
            seatsNumber,
            emailOrPhoneNumber,
            password,
            confirmPassword
        };

        
        for (const key in newDining) {
            if (!newDining[key]) {
              alert(`Missing value for ${key}`);
              return;
            }
        }
        alert('All values are present!');


        const postData = fetchGlobalDatas(newDining, 'dining/add', 'POST')
        alert('Dine created Successfull', postData)
      } catch (error) {
        console.log(error.message)
      }
    };



    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='h-screen w-screen bg-black opacity-60 absolute top-0'></div>
            <div className='bg-white h-[530px]  w-[1200px] absolute flex justify-center flex-col overflow-y-auto'>
                <h1 className='text-4xl mb-10'>Add a new Student</h1>

                <form onSubmit={handleDingingRegister}>
                    <div className='flex justify-around'>

                        <div className='w-64'>

                            <section>
                                <label className="label">
                                    <div className="text">Name of Dining</div>
                                </label>

                                <input name='dineName' type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </section>

                            <section>
                                <label className="label">
                                    <div className="text">Dining Location</div>
                                </label>

                                <select value={selectedDivision ? selectedDivision : 'Select Dining Division'} onChange={(e) => setSelectedDivision(e.target.value)} className="select select-secondary w-full max-w-xs">
                                    <option disabled selected>Select Dining Division</option>
                                    {division.map((divisions, i) => (
                                        <option key={i}>{divisions.name}</option>
                                    ))}
                                </select>
                            </section>



                            <section className='mt-10'>
                                <select value={selectedDistrict ? selectedDistrict : 'District'} disabled={!selectedDivision} onChange={(e) => setSelectedDistrict(e.target.value)} className="select select-secondary w-full max-w-xs">
                                    <option disabled selected>District</option>
                                    {
                                        district &&
                                        district?.map((districts, i) => (<option key={i}>{districts?.name}</option>))

                                    }
                                </select>
                            </section>
                        </div>


                        <div className='w-64'>
                            <section className='mt-10'>
                                <select value={selectedUpazilla ? selectedUpazilla : 'Sub-District'} disabled={!selectedDistrict} onChange={(e) => setSelectedUpazilla(e.target.value)} className="select select-secondary w-full max-w-xs">
                                    <option disabled selected>Sub-District</option>
                                    {
                                        upazilla.map((upazilas, i) => (<option key={i}>{upazilas.name}</option>))
                                    }
                                </select>
                            </section>


                            <section className='mt-10'>
                                <select value={selectedUnion ? selectedUnion : 'Alliance'} disabled={!selectedUpazilla} onChange={(e) => setSelectedUnion(e.target.value)} className="select select-secondary w-full max-w-xs">
                                    <option disabled selected>Alliance</option>
                                    {
                                        union.map((unions, i) => (<option key={i}>{unions.name}</option>))
                                    }
                                </select>
                            </section>


                            <section>
                                <label className="label">
                                    <div className="text">Seats number of Students</div>
                                </label>

                                <input type="number" name='seatsNumber' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" onKeyDown={(e) =>
                                    ["ArrowUp", "ArrowDown", "e", "E", "-"].includes(e.key) && e.preventDefault()
                                } />
                            </section>
                        </div>



                        <div className='w-64'>
                            <section>
                                <label className="label">
                                    <div className="text">Email Or Phone number</div>
                                </label>

                                <input type="text" name='emailOrPhoneNumber' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </section>

                            <section>
                                <label className="label">
                                    <div className="password">Password</div>
                                </label>

                                <input type="text" name='password' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </section>


                            <section>
                                <label className="label">
                                    <div className="text">Confirm Password</div>
                                </label>

                                <input type="password" name='confirmPassword' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                            </section>
                        </div>

                    </div>
                    <p>{error}</p>
                    <button type="submit" className='btn mt-10'>Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Register;