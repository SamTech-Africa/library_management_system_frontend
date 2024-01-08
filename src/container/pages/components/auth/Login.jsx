import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/auth/Login.module.css';

const Login = () => {
    
  return (
    <div>
      <header className={styles.header}>
      <Link to='/#' className={styles.logo}>SamTech.</Link>
        <nav className={styles.navbar}>
            <Link to='/' className='active'>Home</Link>
            <Link to='/register'>Register</Link>
        </nav>
      </header>


      <section className={styles.formSection}>

        
        <h2 class="heading">Welcome <span>Back!</span></h2>
        <p>Login to your Account</p>

        <form className={styles.formInput} action="#">
            <div class={styles.inputBox}>
                <input type="text" placeholder="Enter your email" />
            </div>
            <div class={styles.inputBox}>
                <input type="password" placeholder="Enter your password" />
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
        
        

      </section>
    </div>
   
    
   
  )
}

export default  Login;
