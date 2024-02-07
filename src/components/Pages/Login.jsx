import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../../appwrite/authentication";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail()) {
      setEmailError('Enter a valid college email address (@iitdh.ac.in)');
      return;
    }

    const check = await authService.login({ email, password });

    if (check) {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(authLogin({ email, password }));
        console.log("User should be login now");
        navigate('/tshirt');
      }
    }
  };

  const isValidEmail = () => {
    return email.endsWith('@iitdh.ac.in');
  };

  const renderErrorMessage = (fieldName) => {
    if (fieldName === 'email' && emailError) {
      return <div style={{ color: 'red', fontSize: '12px' }}>{emailError}</div>;
    }
    return null;
  };

  return (
    <div className="bg-[#E2E2E2] min-h-screen ">
      <div className="flex justify-between pt-4">
        <div className="text-2xl text-slate-900 font-bold  md:w-1/2 pl-3 text-center">StyleHub MerchStore</div>
        <div className="flex pr-4">
          <NavLink to='/signup' style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "" })} className=' hover:bg-slate-400 p-1 px-2 rounded-xl '>Signup</NavLink>
          <NavLink to='/' style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "" })} className='bg-slate-900 text-slate-200 px-2 p-1 md:ml-2 hover:font-medium  text-center rounded-md '>{window.innerWidth < 600 ? "Home" : "Back to Home"}</NavLink>
        </div>
      </div>
      <div className="flex justify-center items-center pt-[15vh] md:pt-[24vh] px-2">
        <form className="max-w-80 md:max-w-96 bg-[#F3F2F3] rounded-md">
          <div className="flex justify-center text-2xl font-semibold pt-8 font-sans">Agent Login</div>
          <div className="flex justify-center text-center px-10 pt-4">Enter your detail to get sign in to your account</div>
          <div className="px-12 py-6">
            <div className="pt-3 pl-1">College Email</div>
            <input type="text" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-[30px] rounded-md pl-3 border-[2px] border-slate-400" />
            {renderErrorMessage("email")}
            <div className="pt-3 pl-1">Password</div>
            <input type="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required className="h-[30px] rounded-md pl-3 border-[2px] border-slate-400  max-w-60 md:max-w-96" />
            {renderErrorMessage("nonmatch")}
            <input type="submit" className='rounded-md bg-amber-200 py-[2px] px-3 mt-3' onClick={handleSubmit} />
            <div className="hidden sm:block text-xs pt-3 "><span>The information will be kept securely </span></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
