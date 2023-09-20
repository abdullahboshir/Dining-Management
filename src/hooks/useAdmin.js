import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    
    useEffect( () =>{
        const emailOrNumber = user?.user?.data?.emailOrPhoneNumber;
        if(emailOrNumber){
            fetch(`http://localhost:5000/admin/${emailOrNumber}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=> res.json())
            .then(data => {
                console.log('admin dataaaaaaaaaa', data)
                setAdmin(data.Admin);
                setAdminLoading(false);
            })
        }
    }, [user, admin])

    return [admin, adminLoading]
}

export default useAdmin;

