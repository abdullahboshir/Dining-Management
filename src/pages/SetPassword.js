import { useState } from 'react';
import { fetchGlobalDatas } from '../utils/commonApi';
import { checkPasswordStrength } from '../utils/commonFunction';
import { Navigate } from 'react-router-dom';

const SetPassword = () => {
  const [passwordConfirmation, setPasswordConfirmation] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');



  const handleLoginBlur = async (e) => {
    try {
      e.preventDefault();
      const emailOrPhoneNumber = e.target.emailOrPhoneNumber.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      const studentPin = e.target.studentPin.value;

      if (!(emailOrPhoneNumber || password || confirmPassword || studentPin)) {
        alert('Please fill in the all input')
      };

      const strongPassword = checkPasswordStrength(password);


      if (!strongPassword.status) {
        alert(`${strongPassword.message}`)
        return;
      };


      if (password !== confirmPassword) {
        alert('password does not match')
      };


      const authInfo = {
        emailOrPhoneNumber,
        password,
        studentPin
      };


      const resAuthInfo = await fetchGlobalDatas(authInfo, 'student/setPassword', 'PATCH');
      
      console.log('got the user', resAuthInfo.status)
      
      if (resAuthInfo.data.acknowledged === true) {
      setPasswordConfirmation(true)
      } else if ( resAuthInfo.status === 'success') {
        setPasswordMessage('already made the password before')
      }

      

    } catch (error) {
      console.log('got an error', error)
    }
  }


  return (
   <div>
    {
        passwordConfirmation? <Navigate to='/login' /> 
        :

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
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input type="password" name='confirmPassword' placeholder="Confirm Password" className="input input-bordered" />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Student Pin</span>
                  </label>
                  <input type="number" name='studentPin' placeholder="Pin Number" className="input input-bordered" />
                </div>
  
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sing up</button>
                </div>
             
<p className='text-green-500'>{passwordMessage}</p>

              </div>
            </div>
        </div>
      </form>
    }
   </div>
  );
};

export default SetPassword;