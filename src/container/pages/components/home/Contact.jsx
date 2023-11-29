import React from 'react';
import '../../styles/home/Contact.css';

const Contact = ()=> {
  return (
    <div className='contact' id='contact'>
        <h2 class="heading">Contact <span>Me!</span></h2>

        <form action="#">
            <div class="input-box">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
            </div>
            <div class="input-box">
                <input type="number" placeholder="Phone Number" />
                <input type="text" placeholder="Email Subject" />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" class="btn" />
        </form>
    </div>
  )
}

export default Contact;
