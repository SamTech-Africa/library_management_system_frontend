import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from '../../styles/auth/Auth.module.css';
import style from '../../styles/auth/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [currentField, setCurrentField] = useState('');
  const [error, setError] = useState('');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
     setCurrentField("email");
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
     setCurrentField("password");
  };

  // validate boh email and password using regex pattern
  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };
  
  const isValidPassword = (password) => {
    return passwordRegex.test(password);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const validateErrors = {};

    if (email.trim() === ""){
      validateErrors.email = "Please enter email address.";
      setCurrentField("email");
    } else if (!isValidEmail(email)){
      validateErrors.email = "Please enter a valid email address.";
      setCurrentField("email");
    } else if (password.length < 6){
      validateErrors.password = "Password must be at least 6 characters";
      setCurrentField("password");
    }
    //  else if (!isValidPassword(password)) {
    //   validationErrors.password =
    //     "Password must contain at least one uppercase letter, one lowercase letter,special character, and one digit";
    //   setCurrentField("password");
    // }

    setError(validateErrors);

    if(Object.keys(validateErrors).length === 0){
      const data = {
        email: email,
        password: password,
      };

      try {
        const response = await axios.post('http://localhost:5252/api/v1/auth/login', data);
        
        console.log('Login successfu:', response.data);
        navigate("/dashboard");
      } catch (error) {
        console.error('Error during login', error);
        setError("Invalid email address or password");
      };

    };


    
   

    setTimeout(()=> {
      setError({});
    }, 3000);

    setEmail("");
    setPassword("");
  }

    
  return (
    <div className={styles.container}>
      <div className={style.leftSection}></div>
      <div className={styles.rightSection}>
      <div className={styles.topSection}>
        <h3>
          <Link to="/">
            <i class='bx bxs-chevron-left'></i>  <span>Return Home</span>
          </Link>
        </h3>
        <h3>
            Not a member yet?{" "}
            <Link to="/register">
              <span>Register NOW</span>
            </Link>
        </h3>

      </div>
       <div className={styles.formSection}>
        <p>Login to your Account</p>

        <form className={styles.formInput} onSubmit={handleSubmit}>
            <div class={styles.inputBox}>
                <input
                 type="text"
                 placeholder="Enter your email"
                 value={email}
                 onChange={handleEmailChange} />
            </div>
            {
              error.email && currentField === "email" && (
                <p className={styles.error}>{error.email}</p>
              )
            }
            <div class={styles.inputBox}>
                <input
                 type="password"
                 placeholder="Enter your password"
                 value={password}
                 onChange={handleChangePassword} />
            </div>
            {
              error.password && currentField === "password" && (
                <p className={styles.error}>{error.password}</p>
              )
            }
            <div className={style.others}>
              <div className={style.rememberMe}>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className={style.forgotPassword}>
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            </div>
            <input type="submit" value="Login" className={styles.btn}/>
        </form>
        
        

      </div>
      </div>
    </div>
   
    
   
  )
}

export default  Login;
