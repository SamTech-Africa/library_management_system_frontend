import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../../styles/auth/Verify.module.css'

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
            <div className={styles.leftSection}></div>
            <div className={styles.rightSection}>
                <div className={styles.topSection}>
                    <h3>
                        <Link to="/">
                            <i class='bx bxs-chevron-left'></i>  <span>Return Home</span>
                        </Link>
                    </h3>
                </div>
                
            </div>
        </div>
    )
}

export default Verify;