import React from 'react'
import '../../styles/home/LandingPage.css';
import Navbar from './Navbar';
import Home from '../home/Home';





const LandingPage= ()=> {
    return (
        <div>
            <Navbar />
            <section>
                <Home />
            </section>
        </div>
    )
}

export default LandingPage;