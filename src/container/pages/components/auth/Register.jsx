import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/auth/register.module.css';

const Register  = () => {
    
  return (
    <div>
      <header className={styles.header}>
      <Link to='/#' className={styles.logo}>SamTech.</Link>
        <nav className={styles.navbar}>
            <Link to='/' className='active'>Home</Link>
            <Link to='/login'>Login</Link>
        </nav>
      </header>


      <section className={styles.formSection}>

        
        <h2 class="heading">Welcome </h2>
        <p>Sign up by entering the information below</p>

        <form className={styles.formInput} action="#">
            <div class={styles.inputBox}>
                <input type="text" placeholder="First Name" />
            </div>
            <div class={styles.inputBox}>
                <input type="text" placeholder="Last Name" />
            </div>

            <div class={styles.inputBox}>
                <input type="emai" placeholder="Enter your email" />
            </div>
            <div class={styles.inputBox}>
                <input type="password" placeholder="Enter your password" />
            </div>
            
            <input type="submit" value="Register" className={styles.btn}/>
        </form>
        
        

      </section>
    </div>
   
    
   
  )
}

export default  Register;
