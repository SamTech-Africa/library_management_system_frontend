import React,{useState, useEffect} from 'react';



import '../../styles/home/Navbar.css';

 const Navbar = () => {
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
     <a href='#' className='logo'>SamTech.</a>
     <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <a href='#home' className='active'>Home</a>
        <a href='#about'>About</a>
        <a href='#services'>Services</a>
        <a href='#books'>Books</a>
        <a href='#contact'>Contact</a>
     </nav>
     <div className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`} id='darkMode-icon' onClick={handleDarkModeToggle}></div>

    </header>
   
  )
}

export default Navbar;