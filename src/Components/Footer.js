import React from 'react'
import Nav from './Nav';

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="src/Assets/Images/Logo.svg" alt="logo"/>
      </div>
      <div className="footer-nav">
        <h1>Navigation</h1>
        <Nav />
      </div>
      <div className="footer-contact">
        <h1>Contact</h1>
        <ul>
          <li>Adress</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footer-social">
        <h1>Social Media Links</h1>
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