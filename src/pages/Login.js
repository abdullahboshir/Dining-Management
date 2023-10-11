import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';


const Login = () => {

  const {login} = useAuth()
  const navigate = useNavigate();


  const handleLoginBlur = async (e) => {
    try {
      e.preventDefault();
      const emailOrPhoneNumber = e.target.emailOrPhoneNumber.value;
      const password = e.target.password.value;

const user = await login(emailOrPhoneNumber, password);


const role = user.role;
const dineId = user.diningId;

if (role === 'admin') {
 navigate('/dinings')
} else if(role === 'manager'){
  navigate(`/dinings/${dineId}`)
} else {
  navigate('/studentProfile')
};


      if (!(emailOrPhoneNumber || password)) {
        alert('Please fill in the all input')
      };


    } catch (error) {
      console.log('got an error', error)
    }
  };


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