import { useEffect, useState } from 'react';
import { fetchGlobalDatas } from '../utils/commonApi';
import { checkPasswordStrength } from '../utils/commonFunction';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContextProvider';
import useToken from '../hooks/useToken';

const Login = () => {
  const {diningId} = useParams();
  const { currentUser, setCurrentUser } = useAuthContext();
  const navigate = useNavigate();
  // const token = useToken(user)



  // console.log('thESE ARE  data', user.data)
  // const token = AuthToken(user.data)

  const handleLoginBlur = async (e) => {
    try {
      e.preventDefault();
      const emailOrPhoneNumber = e.target.emailOrPhoneNumber.value;
      const password = e.target.password.value;


      if (!(emailOrPhoneNumber || password)) {
        alert('Please fill in the all input')
      };

      const loginInfo = {
        diningId,
        emailOrPhoneNumber,
        password
      };

      const userInfo = await fetchGlobalDatas(loginInfo, 'student/login', 'POST');
      localStorage.setItem('accessToken', userInfo?.data?.token)
      localStorage.setItem('emailOrNumber', userInfo?.data?.others?.emailOrPhoneNumber)
      console.log('got an error', userInfo?.data?.others?.emailOrPhoneNumber)
      setCurrentUser(userInfo)
      
    } catch (error) {
      console.log('got an error', error)
    }
  };


useEffect(() => {
  const token = localStorage.getItem('accessToken');
  console.log('toeknnnnnnnnn', token)

  if (!token || token === 'null' || token === 'undefined' ) {
    return navigate('/login');
   };

  if(token){
    if(currentUser?.data?.others?.role === 'user'){
      navigate('/studentsPage')
    }
     if(currentUser?.data?.others?.role === 'admin'){
      navigate('/home')
    }
     if(currentUser?.data?.others?.role === 'manager'){
      navigate('/home')
    }
  };

}, [currentUser])


  return (
    <form onSubmit={handleLoginBlur}>
      <div className="hero min-h-screen bg-base-200">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email or Phone Number</span>
              </label>
              <input type="text" name='emailOrPhoneNumber' placeholder="Email/Number" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;