import { useEffect, useState } from "react";
import { fetchGlobalDatas } from "../utils/commonApi";

const useToken = user => {
const [token, setToken] = useState('');

console.log('email or number got ', user.data.emailOrPhoneNumber)

useEffect(() => {
    if(user && user.data.emailOrPhoneNumber){
        const emailOrNumber = user?.data?.emailOrPhoneNumber;
    const fetchData = fetchGlobalDatas({emailOrNumber}, `userToken/${emailOrNumber}`, 'PUT');

    console.log('this token is gottttttttt', fetchData)
    }
}, [user, token])

};


export default useToken;

