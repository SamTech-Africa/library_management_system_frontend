import React from 'react';
import '../../styles/home/Books.css';
import Book1Img from '../../../../assets/image/jpeg/book-1.jpeg'
import Book2Img from '../../../../assets/image/jpeg/book-2.jpeg'
import Book3Img from '../../../../assets/image/jpeg/book-3.jpeg'
import Book4Img from '../../../../assets/image/jpeg/book-4.jpeg'
import Book5Img from '../../../../assets/image/jpeg/book-5.jpeg'
import Book6Img from '../../../../assets/image/jpeg/book-6.jpeg'



const Books = () => {
  return (
    <div className='books' id='books'>
        <h2 className='heading'>Latest <span>Books</span></h2>
        <div className='books-container'>
        <div className='books-box'>
            <img src={Book1Img} alt='Java' />
            <h4>Pro Java Programming</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, inventore
                    esse!
            </p>
            <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
           
        </div>
    </div>
  )
}

export default Books;
