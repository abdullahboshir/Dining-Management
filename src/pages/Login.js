import { useState } from 'react';
import { fetchGlobalDatas } from '../utils/commonApi';
import { checkPasswordStrength } from '../utils/commonFunction';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState('');



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

console.log('suer gotttttttttttt', loginInfo)
      const getAuthInfo = await fetchGlobalDatas(loginInfo, 'student/setLogin', 'POST');
      
     

    } catch (error) {
      console.log('got an error', error)
    }
  }


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