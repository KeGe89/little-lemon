import React from 'react';

function Header() {
  const handleReserveTableClick = () => {
    window.location.href = '/booking';
  };

  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family-owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist</p>
          <button aria-label="On Click" onClick={handleReserveTableClick}>Reserve Table</button>
        </div>
      </section>
    </header>
  );
}

export default Header;