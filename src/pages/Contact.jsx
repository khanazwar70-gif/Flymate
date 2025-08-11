import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Contact = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">✈️ FlyMate</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact" className="active">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>

      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>We're here to help you — anytime, anywhere.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> support@flymate.com</p>
          <p><strong>Phone:</strong> +92 300 1234567</p>
          <p>Feel free to reach out with any questions, concerns, or feedback!</p>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 FlyMate. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
