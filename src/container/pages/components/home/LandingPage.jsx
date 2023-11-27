import React from 'react'
import '../../styles/home/LandingPage.css';
import Navbar from './Navbar';
import Home from '../home/Home';
import About from './About';





const LandingPage= ()=> {
    return (
        <div>
            <Navbar />
            <section>
                <Home />
            </section>
            <section>
                <About />
            </section>
        </div>
    )
}

export default LandingPage;