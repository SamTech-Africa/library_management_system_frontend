import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PinInput from 'react-pin-input';

import styles from '../../styles/auth/Auth.module.css';
import style from '../../styles/auth/Verify.module.css';



const Verify = () => {
    const [email, setEmail] = useState('');


    
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

        <div className={style.content}>
          <h1>Thanks for signing up!</h1>
          <p>We've sent an activation email to: </p>
          <h5>{email}</h5>

          <div className={style.direction}>
            <div className={style.check}>
              <i class='bx bxs-chevron-left'></i>
              <p>Check inbox</p>
            </div>

            <div className={style.open}>
              <i class='bx bxs-chevron-left'></i>
              <p>Open email</p>
            </div>

            <div className={style.click}>
              <i class='bx bxs-chevron-left'></i>
              <p>Click lin in email</p>
            </div>
          </div>

          <input type="submit" value="Login" className={styles.btn}/>
          <div className={styles.footer}>
            <p>Did not get the email? <Link to={"/"}> <span>We will send it again</span> </Link></p>
          </div>

        </div>
       
      </div>
    </div>
   
    
   
  )
}

export default Verify;