import React from 'react';
import './css/Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className='footer-row'>
          <div className='footer-col'>
            <h2>NSN CET</h2>
            <p>Our idea is to produce engineers with global competence and emotional stability who proactively respond to evolving social needs.</p>
          </div>
          <div className='footer-col'>
            <h2>Contact Us</h2>
            <ul className='contact-list'>
              <li>Email: info@nsn.edu</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: 123 Main St, City, State, Zip</li>
            </ul>
          </div>
          <div className='footer-col'>
            <h2>Location</h2>
            <p>N.S.N. Kalvi Nagar,karur - Madurai National Highways Manalmedu <span>Karur - 639 003</span> TamilNadu, India</p>
          </div>
          <div className="footer-col">
            <h2>Quick Links</h2>
            <ul className='quick-links-list'>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/academics'>Academics</a></li>
              <li><a href='/department'>Departments</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer