import React from 'react'
import '../../styles/home/LandingPage.css';
import Navbar from './Navbar';
import Home from '../home/Home';
import About from './About';
import Services from './Services';





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
            <section>
                <Services />
            </section>
        </div>
    )
}

export default LandingPage;