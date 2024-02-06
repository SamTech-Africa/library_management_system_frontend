import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from '../../styles/auth/Auth.module.css';
import style from '../../styles/auth/register.module.css';
const Register  = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name] : event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:5252/api/v1/auth/library-user/register', formData);
      console.log(response.data);
      navigate("/verify");
      
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

    
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
        <div className={style.formSection}>

            <p>Sign up by entering the information below</p>

            <form className={style.formInput} onSubmit={handleSubmit}>
                <div class={style.inputBox}>
                    <input 
                      type="text"
                      placeholder="First Name"
                      name='firstName'
                      onChange={handleChange} />
                </div>
                <div class={style.inputBox}>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name='lastName'
                      onChange={handleChange} />
                </div>

                <div class={style.inputBox}>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    name='email'
                    onChange={handleChange} />
                </div>
                <div class={style.inputBox}>
                    <input
                    type="password"
                      placeholder="Enter your password"
                      name='password'
                      onChange={handleChange} />
                </div>
                
                <input type="submit" value="Register" className={styles.btn}/>
            </form>



        </div>
      </div>
    
    </div>
   
    
   
  )
}

export default  Register;
