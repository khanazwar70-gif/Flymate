import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function ForgotPassword() {
  return (
    <section
      className="auth-hero"
      style={{ backgroundImage: "url('../images/background.jpg')" }}
    >
      <div className="auth-container">
        <h1>Reset Your Password</h1>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Send Reset Link</button>
          <p><Link to="/login">Back to Login</Link></p>
        </form>
      </div>
    </section>
  );
}

export default ForgotPassword;
