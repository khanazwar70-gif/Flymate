import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Adjust path if your styles are elsewhere

const Signup = () => {
  return (
    <section
      className="auth-hero"
      style={{ backgroundImage: "url('../images/background.jpg')" }}
    >
      <div className="auth-container">
        <h1>Create Your Account</h1>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Create Account</button>
          <p>
            Already have an account?{' '}
            <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
