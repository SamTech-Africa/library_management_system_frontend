import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PinInput from 'react-pin-input';

import styles from '../../styles/auth/Auth.module.css';
import style from '../../styles/auth/Verify.module.css';



const Verify = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [verifyPage, setVerifyPage] = useState("");
    const [loading, setLoading] = useState("");

    useEffect (() => {
        const token = new URLSearchParams(location.search).get('token');
        if (!token) {
            setVerifyPage("Invalid token");
            setLoading(page);
        }

        axios.post('http://localhost:5252/api/v1/verify', {token})
            .then(response => {
                setVerifyPage("Your email is veried");
            })
            .catch (error => {
                setVerifyPage("Invalid token or expired token");
            })
            .finally (()=> {
                setLoading(false);
            });
    }, []);
  
    const handleTokenChange = (value) => {
        setToken(value);
    };

    // const handleTokenSubmit = async (event) => {
    //         event.preventDefault();
            
    //         const data = {
    //             email: email,
    //             token: token,
    //           };

    //           try {
    //             const response = await axios.post('http://localhost:5252/api/v1/auth/verify', data);

    //             setShowModal(true);
    //             setModalMessage("Your email is verified!");
    //             setTimeout(() => {
    //                 navigate("/dashboard");
    //             }, 2000);

    //             console.log('Login successfu:', response.data);
    //           }
    //           catch (error) {
    //             console.error('Error during login', error);
    //             setModalMessage("Incorrect or expired OTP, Pleasetry again.");
    //             setShowModal(true);
    //           };

    //           setToken("");
    // };



    // const closeModal = () => {
    //     setShowModal(false);
    // };

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
               {loading ? (
                <p>Loading...</p>
               ) : (
                <div>
                    <h2>{verifyPage}</h2>
                    {verifyPage === "Your email is verified!" ? (
                        <Link to="/dashboard">Go to Dashboard</Link>
                    ) : (
                        <h3>Email not successful</h3>
                    )}
                </div>
               )}

            </div>
        </div>
    )
}

export default Verify;