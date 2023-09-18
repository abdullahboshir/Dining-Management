import { useEffect, useState } from "react"


const AuthToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const emailOrPhoneNumber = user?.user?.emailOrPhoneNumber;
        const token = user.token;

        if(user){
                  const response = fetch(`'http://localhost:5000/student/login',`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`
                    }
                });
            
                  if (!response.ok) {
                    console.error('Response Error:', response.status, response.data);
                    throw new Error('Request failed with status ' + response.status);
                  };
            
                  const data =  response.json();
                  console.log('got data successfully', data)
            
        }
    }, [user])
};

export default AuthToken;