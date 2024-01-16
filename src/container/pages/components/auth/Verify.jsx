import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PinInput from 'react-pin-input';

import styles from '../../styles/auth/Auth.module.css';
import style from '../../styles/auth/Verify.module.css';



const Verify = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location?.email || "";
    const [token, setToken] = useState("");
    const [showModal, setShowModal] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    const handleTokenChange = (value) => {
        setToken(value);
    };

    const handleTokenSubmit = async (event) => {
            event.preventDefault();
            
            const data = {
                email: email,
                token: token,
              };

              try {
                const response = await axios.post('http://localhost:5252/api/v1/auth/verify', data);

                setShowModal(true);
                setModalMessage("Your email is verified!");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 2000);

                console.log('Login successfu:', response.data);
              }
              catch (error) {
                console.error('Error during login', error);
                setModalMessage("Incorrect or expired OTP, Pleasetry again.");
                setShowModal(true);
              };

              setToken("");
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return(
        <div className={styles.container}>
            <div className={style.leftSection}></div>
            <div className={styles.rightSection}>
                <div className={styles.topSection}>
                    <h3>
                        <Link to="/">
                            <i class='bx bxs-chevron-left'></i>  <span>Return Home</span>
                        </Link>
                    </h3>
                </div>
                <div className={style.formSection}>
                    <p>
                        Kindly Check your mail to see your OTP number for Account verification
                    </p>
                    <form className={style.formInput} onSubmit={handleTokenSubmit}>
                        <PinInput 
                            length={5}
                            secret
                            onChange={handleTokenChange}
                            inputMode = "numeric"
                        />
                        <input type="submit" value="Continue" className={styles.btn}/>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Verify;