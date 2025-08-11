import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure this file contains your CSS, including the background PNG

const FlightBooking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const flight = state?.flight;

  const [passengerName, setPassengerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [seatPref, setSeatPref] = useState('');
  const [mealPref, setMealPref] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();

    const bookingDetails = {
      passengerName,
      email,
      phone,
      seatPref,
      mealPref,
      flight,
    };

    // Navigate to payment page with booking details
    navigate('/payment', { state: { bookingDetails } });
  };

  if (!flight) {
    return (
      <div className="booking-container">
        <button className="back-dashboard-btn" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>

        <div className="logo">✈️ FlyMate</div>

        <h2 style={{ color: 'white', marginTop: '20px' }}>No flight selected</h2>
        <button className="booking-form-button" onClick={() => navigate('/flight-search')}>
          Back to Search
        </button>

        <footer style={{ color: 'black', textAlign: 'center', padding: '10px', marginTop: '30px' }}>
          <p>© 2025 FlyMate. Powered by your dreams ✈️</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <button className="back-dashboard-btn" onClick={() => navigate('/dashboard')}>
        Back to Dashboard
      </button>

      <div className="logo" style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: 'white' }}>
        ✈️ FlyMate
      </div>

      <div className="booking-summary">
        <h2>Booking Summary</h2>
        <p><strong>Airline:</strong> {flight.airline}</p>
        <p><strong>Flight No:</strong> {flight.flightNo || 'N/A'}</p>
        <p><strong>Departure:</strong> {flight.departure}</p>
        <p><strong>Arrival:</strong> {flight.arrival}</p>
        <p><strong>Duration:</strong> {flight.duration}</p>
        <p><strong>Price:</strong> {flight.price}</p>
      </div>

      <form className="booking-form" onSubmit={handleBooking}>
        <h3>Passenger Details</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={passengerName}
          onChange={(e) => setPassengerName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <select value={seatPref} onChange={(e) => setSeatPref(e.target.value)} required>
          <option value="">Seat Preference</option>
          <option value="window">Window</option>
          <option value="aisle">Aisle</option>
          <option value="middle">Middle</option>
        </select>

        <select value={mealPref} onChange={(e) => setMealPref(e.target.value)} required>
          <option value="">Meal Preference</option>
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
          <option value="no-meal">No Meal</option>
        </select>

        <button type="submit">Confirm Booking</button>
      </form>

      <footer style={{ color: 'black', textAlign: 'center', padding: '10px', marginTop: '30px' }}>
        <p>© 2025 FlyMate. Powered by your dreams ✈️</p>
      </footer>
    </div>
  );
};

export default FlightBooking;