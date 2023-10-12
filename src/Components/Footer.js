import React from 'react'
import logo from '../assets/images/Logo.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="{logo}" alt="logo"/>
      </div>
      <div className="footer-nav">
        <h3>Footer Navigation</h3>
      </div>
      <div className="footer-contact">
        <h3>Contact</h3>
        <ul>
          <li>Adress</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footer-social">
        <h3>Social Media Links</h3>
        <ul>
          <li><a href="https://www.facebook.com"><img src="src/Assets/Images/facebook.svg" alt="facebook"/></a></li>
          <li><a href="https://www.instagram.com"><img src="src/Assets/Images/instagram.svg" alt="instagram"/></a></li>
          <li><a href="https://www.twitter.com"><img src="src/Assets/Images/twitter.svg" alt="twitter"/></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;