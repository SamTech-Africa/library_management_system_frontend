import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../../styles/auth/Auth.module.css';
import style from '../../styles/auth/Verify.module.css';



const Verify = () => {
    const [email, setEmail] = useState('');
    // const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
     if(location.state && location.state.email) {
        setEmail(location.state.email);
     }
    }, [location.state])


    
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
            Already a member?{" "}
            <Link to="/login">
              <span> Login Now!</span>
            </Link>
          </h3>

        </div>

        <div className={style.content}>
          <h1>Thanks for signing up!</h1>
          <p>We've sent an activation email to: </p>
          <h3>{email}</h3>

          <div className={style.direction}>
            <div className={style.check}>
              <i class='bx bxs-envelope'></i>
              <p>Check inbox</p>
            </div>

            <div className={style.open}>
            <i class='bx bxs-envelope-open'></i>
              <p>Open email</p>
            </div>

            <div className={style.click}>
              <i class='bx bx-link-external'></i>
              <p>Click lin in email</p>
            </div>
          </div>

        <a href="https://mail.google.com/" className={styles.btn}>Login to Gmail</a>
          <div className={styles.footer}>
            <p>Did not get the email? <Link to={"/"}> <span>We will send it again</span> </Link></p>
          </div>

        </div>
       
      </div>
    </div>
   
    
   
  )
}

export default Verify;