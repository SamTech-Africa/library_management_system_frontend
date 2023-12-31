import React from 'react';
import '../../styles/home/Services.css'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='services' id='services'>
        <h2 className='heading'>Our <span>Services</span></h2>
        <div className='services-container'>
            <div className='services-box'>
                <i className='bx bx-code-alt'></i>
                <h3>Software Engineer</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus
                   mollitia, debitis dolorum illo non accusantium, natus nemo rerum facere
                   maiores? Eum!
                </p>
                <Link to='#' className='btn'>Read More</Link>
            </div>
            <div class="services-box">
                <i class='bx bxl-java'></i>
                <h3>Backend Engineer</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus
                   mollitia, debitis dolorum illo non accusantium, natus nemo rerum facere
                   maiores? Eum!</p>
                <Link to="/#" className="btn">Read More</Link>
            </div>
            <div class="services-box">
                <i class='bx bxl-react'></i>
                <h3>Front-end Engineer</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus
                   mollitia, debitis dolorum illo non accusantium, natus nemo rerum facere
                   maiores? Eum!</p>
                <Link to="/#" className="btn">Read More</Link>
            </div>
            <div class="services-box">
                <i class='bx bxl-figma' ></i>
                <h3>System Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus
                   mollitia, debitis dolorum illo non accusantium, natus nemo rerum facere
                   maiores? Eum!</p>
                <Link  to="/#" class="btn">Read More</Link>
            </div>
        </div>

    </div>
  )
}

export default Services;
