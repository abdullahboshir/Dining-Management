import { useEffect, useState } from "react"
import { useAuth } from "../context/ContextProvider";

const useAdmin = user => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminData, setAdminData] = useState('')
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        
        if (user) {
          
            setLoading(true)
            fetch(`http://localhost:5000/admin/${user}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                  
                    if (data?.data?.isAdmin === undefined) {
                        setIsAdmin(false)
                        setLoading(false)
                     
                    }
                    setIsAdmin(data?.data?.isAdmin);
                    setAdminData(data?.data?.others);
                    setLoading(false)
                })
                .catch((error) => {
                    console.error('Error fetching admin data:', error);
                    setIsAdmin(false); // Handle errors by setting admin to false
                    setAdminData(false); // Handle errors by setting admin to false
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [user])


    return {isAdmin, adminData, loading}
}

export default useAdmin;

