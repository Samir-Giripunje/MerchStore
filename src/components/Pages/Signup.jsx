import React, { useState } from 'react';
import {NavLink ,useNavigate} from 'react-router-dom'
import { login } from '../../store/authSlice';
import {useDispatch} from 'react-redux'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName]=useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [phonenumber,setPhonenumber]=useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError,setPasswordError]=useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('');
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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

  const styles = {
    app: {
      fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '20px',
      height: '100vh',
      background: 'url(https://cloud.appwrite.io/v1/storage/buckets/65be24360fa8c5c2e0e2/files/dev4/view?project=65be0eea36b52d7d679e&mode=admin)', // replace with your background image URL
      backgroundSize: 'cover',
    },
    blurBackground: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      filter: 'blur(10px)',
      zIndex: '-1',
    },
    formContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the background color and opacity
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    title: {
      fontSize: '25px',
      marginBottom: '20px',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      margin: '10px',
    },
    input: {
      height: '25px',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      padding: '8px',
      width: '100%',
    },
    submitButton: {
      marginTop: '10px',
      cursor: 'pointer',
      fontSize: '15px',
      background: '#01d28e',
      border: '1px solid #01d28e',
      color: '#fff',
      padding: '10px 20px',
    },
    submitButtonHover: {
      background: '#6cf0c2',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    error: {
      color: 'red',
      fontSize: '12px',
    },
    signInLink: {
        color: '#3498db',
        cursor: 'pointer',
        textDecoration: 'underline',
      },
  };

  return (
    <div style={styles.app}>
      <div style={styles.blurBackground}></div>
      <div className="login-form" style={styles.formContainer}>
        <div className="title" style={styles.title}>
          Signup
        </div>
        <div className="form">
          <form onSubmit={handleSubmit} style={styles.formContainer}>
          <div className="input-container" style={styles.inputContainer}>
              <label>Name </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
                required
                className='rounded-lg'
              />
             
            </div>
            <div className="input-container" style={styles.inputContainer}>
              <label>Email </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
                className='rounded-lg'
              />
              {renderErrorMessage("email")}
            </div>
            <div className="input-container" style={styles.inputContainer}>
              <label>Password </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
                className='rounded-lg'
              />
              
            </div>
            <div className="input-container" style={styles.inputContainer}>
              <label>Confirm Password </label>
              <input
                type="password"
                name="confirmpassword"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={styles.input}
                required
                className='rounded-lg'
              />
              {renderErrorMessage("password")}
            </div>
            <div className="input-container" style={styles.inputContainer}>
              <label>Phone Number</label>
              <input
                type="number"
                name="phonenumber"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                style={styles.input}
                required
                className='rounded-lg'
              />
              {renderErrorMessage("phonenumber")}
            </div>
            <div className="button-container" style={styles.buttonContainer}>
              <input type="submit" style={styles.submitButton}  className='rounded-md'/>
            </div>
          </form>
          <p style={styles.smallText}>
        Do you have an account?  <NavLink to="/login" style={styles.signInLink}>Log In</NavLink>
      </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
