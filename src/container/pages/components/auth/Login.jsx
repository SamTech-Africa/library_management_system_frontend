import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from '../../styles/auth/Auth.module.css';
import style from '../../styles/auth/Login.module.css';

const Login = () => {
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

        <div className={styles.content}>
          <h1>Thanks for signing up!</h1>
        </div>
       
      </div>
    </div>
   
    
   
  )
}

export default  Login;
