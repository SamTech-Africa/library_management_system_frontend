import React from 'react'
import '../../styles/home/Home.css';
import Professional from './Professional';

const Home =()=> {
  return (
    <div className='home' id='home'>
        <div className='home-content'>
            <h1>SamTech Library Management System</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, deserunt! Nulla optio omnis alias fugit amet maiores tempora magnam eligendi libero ab soluta nemo pariatur,
                accusamus temporibus quasi? Inventore excepturi est provident laborum deleniti rem rerum nihil quibusdam at debitis.
            </p>
            <div className='social-media'>
                <a href='#'><i className=''></i></a>
                <a href='#'><i className=''></i></a>
                <a href='#'><i className=''></i></a>
                <a href='#'><i className=''></i></a>
            </div>
            <a href='#'><i className='btn'>Get Started</i></a>
        </div>
        <Professional />

    </div>
  )
}

export default Home;