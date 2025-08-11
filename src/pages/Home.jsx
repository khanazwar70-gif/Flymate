import React from 'react';
import '../App.css'; 

function Home() {
  return (
    <>
      {/* Header/Navbar */}
      <header className="navbar">
        <div className="logo">✈️ FlyMate</div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Book Your Next Adventure with FlyMate</h1>
          <p>Smart. Simple. Seamless flight booking experience.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose FlyMate?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>🕒 Real-Time Availability</h3>
            <p>Instant updates on available flights and prices.</p>
          </div>
          <div className="feature-box">
            <h3>🎫 Easy Booking</h3>
            <p>Simple steps to book flights in minutes.</p>
          </div>
          <div className="feature-box">
            <h3>💳 Secure Payments</h3>
            <p>Multiple secure payment options like card, JazzCash, Easypaisa.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 FlyMate. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
        </div>
      </footer>
    </>
  );
}

export default Home;
