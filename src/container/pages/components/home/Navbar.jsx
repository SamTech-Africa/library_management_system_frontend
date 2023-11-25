import React from 'react';

import '../../styles/home/Navbar.css';

 const Navbar = () => {

    
  return (
    <header className='header'>
     <a href='#' className='logo'>SamTech.</a>
     <nav className='navbar'>
        <a href='#home' className='active'>Home</a>
        <a href='#about' className='active'>About</a>
        <a href='#services' className='active'>Services</a>
        <a href='#books' className='active'>books</a>
        <a href='#contact' className='active'>Contact</a>
     </nav>

    </header>
   
  )
}

export default Navbar;