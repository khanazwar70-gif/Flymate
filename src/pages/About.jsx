import React from 'react';
import '../App.css';

function About() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">✈️ FlyMate</div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about" className="active">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About FlyMate</h1>
          <p>Your smart partner for affordable and reliable airline bookings</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-box">
          <h2>What is FlyMate?</h2>
          <p>
            FlyMate is a smart and user-friendly web application designed to make your airline ticket booking smooth, fast, and hassle-free.
            We connect you to hundreds of flights with real-time availability, secure payment options, and responsive customer service — all in one place.
          </p>
        </div>

        <div className="about-box">
          <h2>Our Mission & Vision</h2>
          <p><strong>Mission:</strong> To simplify the air travel experience for everyone through innovative technology, transparent pricing, and unbeatable convenience.</p>
          <p><strong>Vision:</strong> To become Pakistan’s most trusted online flight booking platform, connecting travelers to the world with ease and reliability.</p>
        </div>

        <div className="about-box">
          <h2>Our Goals</h2>
          <ul>
            <li>🌍 Expand access to international and domestic flight options</li>
            <li>💡 Offer seamless booking experience through smart design</li>
            <li>🔒 Ensure secure, multi-option payment systems</li>
            <li>📱 Provide a mobile-friendly, responsive interface for all users</li>
          </ul>
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

export default About;
