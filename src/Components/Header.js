import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family-owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist</p>
          <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
        </div>
      </section>
    </header>
  );
}

export default Header;