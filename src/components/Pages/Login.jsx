import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const renderErrorMessage = (fieldName) => {
    // You can implement error message rendering logic based on your needs
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
          Log In
        </div>
        <div className="form">
          <form onSubmit={handleSubmit} style={styles.formContainer}>
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
              {renderErrorMessage("password")}
            </div>
            <div className="button-container" style={styles.buttonContainer}>
              <input type="submit" style={styles.submitButton}  className='rounded-md'/>
            </div>
          </form>
          <p style={styles.smallText}>
        Don't have an account?
        
        <NavLink to="/signup" style={styles.signInLink}>Sign In</NavLink>
        </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
