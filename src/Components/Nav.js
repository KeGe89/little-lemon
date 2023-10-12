import React from 'react'
import logo from '../assets/images/Logo.svg';

function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`} >
        <a href='/' className='logo'>
            <img src={logo} alt='logo'/>
        </a>

        {/* Hamburger menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav;