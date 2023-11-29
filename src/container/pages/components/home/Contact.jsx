import React from 'react';
import '../../styles/home/Contact.css';

const Contact = ()=> {
  return (
    <div className='contact' id='contact'>
    <h2 className='heading'>Contact <span>Us!</span></h2>
    <form action='#'>
        <div className='input-box'>
            <input type='text' placeholder='Full Name' />
            <input type='email' placeholder='Email Address' />
        </div>
        <div className='input-box'>
            <input type='number' placeholder='Phone Number' />
            <input type='text' placeholder='Email Subject' />
        </div>
        <textarea name='' id='' cols={30} rows={10}  placeholder='Your Message' />
        <input type='submit' value={'Send Message'} className='btn' />
    </form>
    </div>
  )
}

export default Contact;
