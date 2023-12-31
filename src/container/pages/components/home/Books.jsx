import React from 'react';
import '../../styles/home/Books.css';
import Book1Img from '../../../../assets/image/jpeg/book-1.jpeg'
import Book2Img from '../../../../assets/image/jpeg/book-2.jpeg'
import Book3Img from '../../../../assets/image/jpeg/book-3.jpeg'
import Book4Img from '../../../../assets/image/jpeg/book-4.jpeg'
import Book5Img from '../../../../assets/image/jpeg/book-5.jpeg'
import Book6Img from '../../../../assets/image/jpeg/book-6.jpeg'
import { Link } from 'react-router-dom';



const Books = () => {
  return (
    <div className='books' id='books'>
        <h2 className='heading'>Latest <span>Books</span></h2>
        <div className='books-container'>
            <div className='books-box'>
                <img src={Book1Img} alt='Java' />
                <div className='books-layer'>
                    <h4>Pro Java Programming</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, inventore
                        esse!
                    </p>
                    <Link to="#"><i class="bx bx-link-external"></i></Link>
                </div>
            </div>
            <div className='books-box'>
                <img src={Book2Img} alt='Java' />
                <div className='books-layer'>
                    <h4>Java Programming</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, inventore
                        esse!
                    </p>
                    <Link to="#"><i class="bx bx-link-external"></i></Link>
                </div>
            </div>
            <div className='books-box'>
                <img src={Book3Img} alt='Java' />
                <div className='books-layer'>
                    <h4>Java Dietel</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, inventore
                        esse!
                    </p>
                    <Link to="#"><i class="bx bx-link-external"></i></Link>
                </div>
            </div>
            <div className='books-box'>
                <img src={Book4Img} alt='Java' />
                <div className='books-layer'>
                    <h4>Python Programming</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, inventore
                        esse!
                    </p>
                    <Link to="#"><i class="bx bx-link-external"></i></Link>
                </div>
            </div>
            <div className='books-box'>
                <img src={Book5Img} alt='Java' />
                <div className='books-layer'>
                    <h4>The Definition Guide to Django</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, inventore
                        esse!
                    </p>
                    <Link to="#"><i class="bx bx-link-external"></i></Link>
                </div>
            </div>
            <div className='books-box'>
                <img src={Book6Img} alt='Java' />
                <div className='books-layer'>
                    <h4>Spring Boot in Action</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, inventore
                        esse!
                    </p>
                    <Link to="#"><i class="bx bx-link-external"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Books;
