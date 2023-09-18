import { useEffect, useState } from "react";
import { fetchGlobalDatas } from "../utils/commonApi";

const userToken = user => {
const [token, setToken] = useState('');

useEffect(() => {
    if(user && user.data.emailOrPhoneNumber){
        const emailOrNumber = user?.user?.data?.emailOrPhoneNumber;
    const fetchData = fetchGlobalDatas({emailOrNumber}, `student/userToken/${emailOrNumber}`, 'PATCH');

    console.log('this token is gottttttttt')
    }
}, [])

};

