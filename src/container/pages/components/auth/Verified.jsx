import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../../styles/auth/Auth.module.css';
import style from '../../styles/auth/Verify.module.css';



const Verified = () => {
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
       

        <div className={style.content}>
          <h1>Thanks for signing up!</h1>
          <p>We've sent an activation email to: </p>
          <h3>{email}</h3>

          <div className={style.direction}>
            
            
          </div>

        </div>
       
      </div>
    </div>
   
    
   
  )
}

export default Verified;