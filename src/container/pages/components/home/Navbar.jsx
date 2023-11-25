import React,{useState, useEffect} from 'react';

import '../../styles/home/Navbar.css';

 const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

    
  return (
    <header className={`header ${isSticky ? 'sticty' : ''}`}>
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