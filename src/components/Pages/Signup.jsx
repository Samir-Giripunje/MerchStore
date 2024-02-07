import React,{useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import authService from "../../appwrite/authentication";
import inputUserData from "../../appwrite/userData";
import {ID} from 'appwrite'
import {useDispatch} from 'react-redux' 
import {login} from '../../store/authSlice'



function Signup() {
  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [phonenumber,setPhonenumber]=useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError,setPasswordError]=useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = async(e) => {
    e.preventDefault();


    
    if (!isValidEmail()) {
        setEmailError('Enter a valid college email address (@iitdh.ac.in)');
        return;
      }

      if(password!==confirmpassword){
        setPasswordError('Password and Confirm Password is not matching')
      }
      if (!isValidPhoneNumber()) {
        setPhoneNumberError('Enter a valid 10-digit phone number');
        return;
      }


      const userId = ID.unique()
     

        const user= await authService.createAccount({email,password,name,userId})
              if(user){    
                const Data= await inputUserData.userData({name,email,password,phonenumber,userId})
                      
                      if(Data){                  
                                const userData = await authService.getCurrentUser();
                                if(userData) dispatch(login(userData));
                                navigate("/")              
                      }
                     
              }
  };


  const isValidEmail = () => {
    return email.endsWith('@iitdh.ac.in');
  };
  const isValidPhoneNumber = () => {
    return /^\d{10}$/.test(phonenumber);
  };

  const renderErrorMessage = (fieldName) => {
    // You can implement error message rendering logic based on your needs
    if (fieldName === 'email' && emailError) {
        return <div style={{ color: 'red', fontSize: '12px' }}>{emailError}</div>;
      }
      if (fieldName === 'password' ) {
        return <div style={{ color: 'red', fontSize: '12px' }}>{passwordError}</div>;
      }
      if (fieldName === 'phonenumber' && phoneNumberError) {
        return <div style={{ color: 'red', fontSize: '12px' }}>{phoneNumberError}</div>;
      }
    return null;
  };


  return (
    <div className="bg-[#E2E2E2] min-h-screen pb-10">
      <div className="flex justify-between pt-4 ">
        <div className="text-2xl text-slate-900 font-bold  md:w-1/2 pl-3 text-center">StyleHub MerchStore</div>
        <div className="flex pr-4">
        <NavLink to='/login' 
                  style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : ""
                    };
                  }}
                  className=' hover:bg-slate-400 p-1 px-2 rounded-xl '>   
                  Login
                </NavLink>
                <NavLink to='/' 
                  style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : ""
                    };
                  }}
                  className='bg-slate-900 text-slate-200 px-2 p-1 md:ml-2 hover:font-medium  text-center rounded-md '>   
                 {window.innerWidth < 600?"Home":"Back to Home"}
                </NavLink>
        </div>
       
      </div>
      <div className="flex justify-center items-center pt-[15vh] md:pt-[24vh] px-2">
      <form className="max-w-80 md:max-w-96 bg-[#F3F2F3] rounded-md">
        <div className="flex justify-center text-2xl font-semibold pt-8 font-sans">Signup</div>
        <div className="flex justify-center text-center px-10 pt-4">
          Enter your detail to get sign in to your account
        </div>
        <div className="px-12 py-6">
        <div className="pl-2">Name</div>
        <input
         type="text"
         name="name"
         value={name}
          onChange={(e) => setName(e.target.value)}
          required
         placeholder="Enter name"
          className="h-[30px] rounded-md pl-3 border-[2px] border-slate-400 max-w-60 md:max-w-96" />
        <div className="pt-3 pl-1">College Email</div>
        <input 
         type="text"
         name="email"
         placeholder="Enter email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required
         className="h-[30px] rounded-md pl-3 border-[2px] border-slate-400  max-w-60 md:max-w-96"
         />
          {renderErrorMessage("email")}

<div className="pt-3 pl-1">Password</div>
        <input 
         type="password"
         name="password"
         placeholder="Enter password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
         className="h-[30px] rounded-md pl-3 border-[2px] border-slate-400  max-w-60 md:max-w-96"
         />
       
       <div className="pt-3 pl-1">Confirm Password</div>
        <input 
         type="password"
         name="confirmpassword"
         placeholder="Reenter password"
         value={confirmpassword}
         onChange={(e) => setConfirmPassword(e.target.value)}
         required
         className="h-[30px] rounded-md pl-3 border-[2px] border-slate-400  max-w-60 md:max-w-96"
         />
 {renderErrorMessage("password")}
<div className="pt-3 pl-1">Phone Number</div>
        <input 
         type="phonenumber"
         name="phonenumber"
         placeholder="Enter Phone number"
         value={phonenumber}
         onChange={(e) => setPhonenumber(e.target.value)}
         required
         className="h-[30px] rounded-md pl-3 border-[2px] border-slate-400  max-w-60 md:max-w-96"
         />
 {renderErrorMessage("phonenumber")}

       <input type="submit"  className='rounded-md bg-amber-200 py-[2px] px-3 mt-3 ' onClick={handleSubmit}/>
        <div className="hidden sm:block text-xs pt-3 ">
          <span>The information will be kept securely </span>
        </div>
        </div>
       
      </form>
      </div>
      
    </div>
  );
}

export default Signup;
