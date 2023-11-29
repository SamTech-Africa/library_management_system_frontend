import React from 'react';
import '../../styles/home/Testimonial.css';
import Daniel from '../../../../assets/image/jpeg/daniel.jpg'
import Gabriel from '../../../../assets/image/jpeg/gabriel.jpeg'
import Dami from '../../../../assets/image/jpeg/dami.jpeg'



const Testimonial = () => {

  
  return (
    <div className='testimonial-container'>
        <h2 className='heading'>Valuable <span>Testimonial</span></h2>
        <div className='testimonial-wrapper'>
            <div className='testimonial-box mySwiper'>
                <div className='testimonial-content swiper-swapper'>
                  <div className='testimonial-slide swiper-slide'>
                  <img src={Daniel}  alt="" />
                        <h3>Omosele Daniel</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Veritatis consequatur eligendi, dolor sed velit animi,
                             eos excepturi optio libero maiores non enim inventore cumque eaque vitae,
                             delectus voluptatum? Quia quasi, dolores maxime dicta,
                             consequatur odit pariatur quas sunt rerum reprehenderit cum nulla provident placeat nesciunt minima eligendi blanditiis, veniam asperiores aspernatur voluptatum optio at.
                             Nostrum impedit obcaecati amet deleniti inventore!</p>
                    </div>
                    <div class="testimonial-slide swiper-slide">
                        <img src={Gabriel}  alt="" />
                        <h3>Gabriel Odukoya</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Veritatis consequatur eligendi, dolor sed velit animi,
                             eos excepturi optio libero maiores non enim inventore cumque eaque vitae,
                             delectus voluptatum? Quia quasi, dolores maxime dicta,
                             consequatur odit pariatur quas sunt rerum reprehenderit cum nulla provident placeat nesciunt minima eligendi blanditiis, veniam asperiores aspernatur voluptatum optio at.
                             Nostrum impedit obcaecati amet deleniti inventore!</p>
                    </div>
                    <div class="testimonial-slide swiper-slide">
                        <img src={Dami} alt="" />
                        <h3>Arikeushola Damilare</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Veritatis consequatur eligendi, dolor sed velit animi,
                             eos excepturi optio libero maiores non enim inventore cumque eaque vitae,
                             delectus voluptatum? Quia quasi, dolores maxime dicta,
                             consequatur odit pariatur quas sunt rerum reprehenderit cum nulla provident placeat nesciunt minima eligendi blanditiis, veniam asperiores aspernatur voluptatum optio at.
                             Nostrum impedit obcaecati amet deleniti inventore!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial;