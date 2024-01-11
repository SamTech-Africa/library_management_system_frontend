import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from '../../styles/auth/register.module.css';

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
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

    
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

        <form className={styles.formInput} onSubmit={handleSubmit}>
            <div class={styles.inputBox}>
                <input 
                  type="text"
                  placeholder="First Name"
                  name='firstName'
                  onChange={handleChange} />
            </div>
            <div class={styles.inputBox}>
                <input
                  type="text"
                  placeholder="Last Name"
                  name='lastName'
                  onChange={handleChange} />
            </div>

            <div class={styles.inputBox}>
                <input
                 type="email"
                 placeholder="Enter your email"
                 name='email'
                 onChange={handleChange} />
            </div>
            <div class={styles.inputBox}>
                <input
                 type="password"
                  placeholder="Enter your password"
                  name='password'
                  onChange={handleChange} />
            </div>
            
            <input type="submit" value="Register" className={styles.btn}/>
        </form>
        
        

      </section>
    </div>
   
    
   
  )
}

export default  Register;
