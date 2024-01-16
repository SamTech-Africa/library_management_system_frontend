import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from '../../styles/auth/Auth.module.css';
import style from '../../styles/auth/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    };
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
            <div class={styles.inputBox}>
                <input
                 type="password"
                 placeholder="Enter your password"
                 value={password}
                 onChange={handleChangePassword} />
            </div>
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
