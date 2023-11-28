import React from 'react'
import '../../styles/home/LandingPage.css';
import Navbar from './Navbar';
import Home from '../home/Home';
import About from './About';
import Services from './Services';
import Books from './Books';





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
            <section>
                <Books />
            </section>
        </div>
    )
}

export default LandingPage;