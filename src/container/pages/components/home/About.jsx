import React from 'react';
import AboutImg from '../../../../assets/image/jpeg/About.jpeg';
import '../../styles/home/About.css';
const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-img'>
            <img src={AboutImg} alt='About Img' />
        </div>
        <div className='about-content'>
            <h2 className='heading'>About <span>Us</span></h2>
            <h3>Hi, We here To Help With Books!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, deserunt! Nulla optio omnis alias fugit amet maiores tempora magnam eligendi libero ab soluta nemo pariatur,
                accusamus temporibus quasi? Inventore excepturi est provident laborum deleniti rem rerum nihil quibusdam at debitis.
            </p>

            <a href="#" class="btn">Read More</a>
        </div>

    </div>
  )
}

export default About;
