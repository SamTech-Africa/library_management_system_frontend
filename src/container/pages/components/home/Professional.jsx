import React from 'react';
import '../../styles/home/Professional.css';


const Professional = ()=> {
  return (
    <div className='profession-container'>
        <div className='profession-box'>
            <div className='profession'>
                <i className='bx bx-code-alt'></i>
                <h3>Software Engineer</h3>
            </div>
            <div class="profession">
                    <i class='bx bxl-java'></i>
                    <h3>Backend Engineer</h3>
                </div>
                <div class="profession">
                    <i class='bx bxl-react'></i>
                    <h3>Front-end Engineer</h3>
                </div>
                <div class="profession">
                    <i class='bx bxl-figma' ></i>
                    <h3>System Design</h3>
                </div>

                <div className='circle'></div>
        </div>
        <div className='overlay'></div>
    </div>
  )
}
export default Professional;
