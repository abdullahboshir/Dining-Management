import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    
    useEffect( () =>{
  
        if(user){
            fetch(`http://localhost:5000/admin/${user}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=> res.json())
            .then(data => {
                console.log('admin dataaaaaaaaaa', data?.admin)
                setAdmin(data?.admin);
            })
        }
    }, [user, admin])

    return admin
}

export default useAdmin;

