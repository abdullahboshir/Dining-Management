import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLocalDatas } from '../../utils/commonApi';

const authContext = createContext()

export const ReusableComponent = ({ children }) => {
  

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




    const findLocation = (mainData, mainData2, selectedData) => {
        const findMatch = mainData.data.find(matchfind => matchfind.name === selectedData);

        const filterMatch = mainData2?.data?.filter(matchfilter => matchfilter?.division_id === findMatch?.id || matchfilter?.district_id === findMatch?.id || matchfilter?.upazilla_id === findMatch?.id
        );
        return filterMatch;
    };


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


                    if(divisionId && districtId && upazilaId){
                        setDistrict(divisionId);
                        setUpazilla(districtId);
                        setUnion(upazilaId);
                    }
                    else{
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
        return <div>Loading...</div>;
    };

    if (error) {
        return <div>Error: {error}</div>;
    };


    if (!division || !Array.isArray(division)) {
        return null;
    };

    if (!district || !Array.isArray(district)) {
        return null;
    };

    if (!upazilla || !Array.isArray(upazilla)) {
        return null;
    };

    if (!union || !Array.isArray(union)) {
        return null;
    };



 
const contextValue = {
    division,
    setDivision,
    district,
    setDistrict,
    upazilla,
    setUpazilla,
    union,
    setUnion,
    selectedDivision,
    setSelectedDivision,
    selectedDistrict,
    setSelectedDistrict,
    selectedUpazilla,
    setSelectedUpazilla,
    selectedUnion,
    setSelectedUnion,
    error
};


    return (
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>
    );
};



export const useReusableContext = () => {
    return useContext(authContext)
};


