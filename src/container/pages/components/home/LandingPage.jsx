import React from 'react'
import '../../styles/home/LandingPage.css';
import Navbar from './Navbar';
import Home from '../home/Home';
import About from './About';
import Services from './Services';
import Books from './Books';
import Testimonial from './Testimonial';
import Contact from './Contact';





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
            <section>
                <Testimonial />
            </section>
            <section>
                <Contact />
            </section>
        </div>
    )
}

export default LandingPage;