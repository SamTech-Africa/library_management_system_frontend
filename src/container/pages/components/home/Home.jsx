import React from 'react'
import '../../styles/home/Home.css';
import Professional from './Professional';
import LibrayShelfImg from '../../../../assets/image/jpg/library-shelf.jpg';
import { Link } from 'react-router-dom';


const Home =()=> {

  return (
    <div className='home' id='home'>
        <div className='home-content'>
            <h3>Welcome To</h3>
            <h1>SamTech Library Management System</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, deserunt! Nulla optio omnis alias fugit amet maiores tempora magnam eligendi libero ab soluta nemo pariatur,
                accusamus temporibus quasi? Inventore excepturi est provident laborum deleniti rem rerum nihil quibusdam at debitis.
            </p>
            <div class="social-media">
                <Link to="/#"><i class="bx bxl-facebook" ></i></Link>
                <Link to="/#"><i class="bx bxl-twitter" ></i></Link>
                <Link to="/#"><i class="bx bxl-instagram-alt" ></i></Link>
                <Link to="/#"><i class="bx bxl-linkedin" ></i></Link>
            </div>
            <Link className="btn" to="/login">Get Started</Link>
        </div>
        <Professional />
        <div className='home-img'>
          <img src={LibrayShelfImg} alt='Library Shelf' />
        </div>

    </div>
  )
}

export default Home;