import React,{useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from '../../styles/auth/Login.module.css';

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
      <div className={styles.leftSection}></div>
      <div className={styles.rightSection}>
      <div className={styles.topSection}>
        <h5>
          <Link to="/">
            <i class='bx bxs-chevron-left'></i>
          </Link>
        </h5>
        <h5>
            Not a member yet?{" "}
            <Link to="/register">
              <span>Register NOW</span>
            </Link>
        </h5>

      </div>
      </div>



      {/* <section className={styles.formSection}>

        
        <h2 class="heading">Welcome <span>Back!</span></h2>
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
            <div className={styles.others}>
              <div className={styles.rememberMe}>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className={styles.forgotPassword}>
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            </div>
            <input type="submit" value="Login" className={styles.btn}/>
        </form>
        
        

      </section> */}
    </div>
   
    
   
  )
}

export default  Login;
