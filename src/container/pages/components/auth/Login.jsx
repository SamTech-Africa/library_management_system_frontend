import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import '../../styles/auth/Login.css';

const Login = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-icon');
  }

  

    
  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
     <Link to='/#' className='logo'>SamTech.</Link>
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#home' className='active'>Home</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#about'>About</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#services'>Services</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#books'>Books</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#contact'>Contact</a>
      </nav>
      <div className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`} id='darkMode-icon' onClick={handleDarkModeToggle}></div>

    </header>
   
  )
}

export default  Login;
