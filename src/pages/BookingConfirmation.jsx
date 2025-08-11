import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../PaymentBooking.css';

const BookingConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.booking;
  const ref = state?.ref || 'FM000000';

  const handleDownload = () => {
    window.print();
  };

  if (!booking) {
    return (
      <div className="confirmation-container">
        <div className="logo">✈️ FlyMate</div>
        <div className="confirmation-card"><h2>Invalid Booking</h2></div>
        <footer className="footer">
          <p>© 2025 FlyMate. Powered by your dreams ✈️</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <div className="logo">✈️ FlyMate</div>
      <div className="confirmation-card">
        <div className="success">Thank you for your booking!</div>
        <div className="ref">Booking Reference: {ref}</div>
        <div className="confirmation-summary">
          <div><strong>Airline:</strong> {booking.flight.airline}</div>
          <div><strong>Flight No:</strong> {booking.flight.flightNo || 'N/A'}</div>
          <div><strong>From:</strong> {booking.flight.departure}</div>
          <div><strong>To:</strong> {booking.flight.arrival}</div>
          <div><strong>Passenger:</strong> {booking.passengerName}</div>
          <div><strong>Fare:</strong> {booking.flight.price}</div>
          <div><strong>Date:</strong> {booking.flight.date}</div>
          <div><strong>Time:</strong> {booking.flight.time}</div>
          <div><strong>Seat Preference:</strong> {booking.seatPref === 'window' ? 'Window' : booking.seatPref === 'aisle' ? 'Aisle' : booking.seatPref === 'middle' ? 'Middle' : 'Not specified'}</div>
          <div><strong>Meal Preference:</strong> {booking.mealPref === 'veg' ? 'Vegetarian' : booking.mealPref === 'non-veg' ? 'Non-Vegetarian' : booking.mealPref === 'no-meal' ? 'No Meal' : 'Not specified'}</div>
        </div>
        <div className="confirmation-actions">
          <button onClick={handleDownload}>Download / Print Ticket</button>
          <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
          <button onClick={() => navigate('/')}>Home</button>
        </div>
      </div>
      <footer className="footer">
        <p>© 2025 FlyMate. Powered by your dreams ✈️</p>
      </footer>
    </div>
  );
};

export default BookingConfirmation;