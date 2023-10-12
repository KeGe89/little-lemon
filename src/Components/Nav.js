import React from 'react'

function Nav() {
  return (
    <nav>
        <div className="logo">
            <img src="src/Assets/Images/Logo.svg" alt="logo"/>
        </div>
        <div className='navbar'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav;