import React from 'react'
import logo from '../assets/images/Logo.svg';

function Footer() {
  return (
    <footer>
    <section>
      <div className="company-info">
        <img src={logo} alt="logo"/>
        <p>Little Lemon is a family-owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist.</p>
      </div>
      <div>
        <h3>Footer Navigation</h3>
        <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
            <li>Address: <br/> 123 Town Street, Chicago</li>
                <li>Phone Number: <br/> +00 123 456 789</li>
                <li>Email: <br/> info@little-lemon.com</li>
            </ul>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li><a href="https://www.facebook.com"><img className="footer-social" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png" alt="facebook"/></a></li>
          <li><a href="https://www.instagram.com"><img className="footer-social" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-256.png" alt="instagram"/></a></li>
          <li><a href="https://www.twitter.com"><img className="footer-social" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-256.png" alt="twitter"/></a></li>
        </ul>
      </div>
    </section>
    </footer>
  )
}

export default Footer;