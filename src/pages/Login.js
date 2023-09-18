import { useEffect, useState } from 'react';
import { fetchGlobalDatas } from '../utils/commonApi';
import { checkPasswordStrength } from '../utils/commonFunction';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthToken from '../utils/authToken';
import { useAuthContext } from '../context/AuthContextProvider';

const Login = () => {

  const { setUser, user } = useAuthContext();
  const navigate = useNavigate();




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
        emailOrPhoneNumber,
        password
      };

      const userInfo = await fetchGlobalDatas(loginInfo, 'student/login', 'POST');
      setUser(userInfo)
      localStorage.setItem('accessToken', user?.data?.token)
      console.log('this eis data', user.data.user.role)

    } catch (error) {
      console.log('got an error', error)
    }
  };


  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    if (token && user?.data?.user?.role === 'user') {
      navigate('/studentsPage');
    } else if (token && user?.data?.user?.role === 'admin') {
      navigate('/home');
    } else if (token && user?.data?.user?.role === 'manager') {
      navigate('/singleDineHome');
    };


  }, [token, user]);


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