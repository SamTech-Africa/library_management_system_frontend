import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import styles from '../../styles/auth/Auth.module.css';
import style from '../../styles/auth/Verify.module.css';
import axios from 'axios';



const Verified = () => {
    const [verificationStatus,setVerificationStatus] = useState('');
    const location = useLocation();
    const history = useHistory();

    useEffect(() => { 
      const queryParams = new URLSearchParams(location.search);
      const userEmail = queryParams.get('email');
      const verificationToken = queryParams.get('token');

      if (userEmail && verificationToken) {
        verifyAccount(userEmail, verificationToken);
      } else {
        setVerificationStatus("Invalid verification link");
      }
    }, [location.search]);

    const verifyAccount = async (email, token) => {
      try {
        await axios.get(`http://localhost:5252/api/v1/auth/verify?email=${email}&tokn=${token}`);
        setVerificationStatus("Account verified successfully");
      } catch (error) {
        setVerificationStatus('Failed to verify account')
      }
    }
     


    
  return (
    <div className={styles.container}>
      <div className={style.leftSection}></div>
      <div className={styles.rightSection}>
       

        <div className={style.content}>
          <h1>Thanks for signing up!</h1>
          <p>We've sent an activation email to: </p>
          <h3>{email}</h3>

        

        </div>
       
      </div>
    </div>
   
    
   
  )
}

export default Verified;