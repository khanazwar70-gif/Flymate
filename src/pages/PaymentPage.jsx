import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../PaymentBooking.css';

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.bookingDetails;

  const [method, setMethod] = useState('card');
  const [cardNo, setCardNo] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  if (!booking) {
    return (
      <div className="payment-container">
        <div className="logo">✈️ FlyMate</div>
        <button className="back-flights-btn" onClick={() => navigate('/search-flights')}>
          Back to Available Flights
        </button>
        <div className="payment-card"><h2>Invalid Payment</h2></div>
        <footer className="footer">
          <p>© 2025 FlyMate. Powered by your dreams ✈️</p>
        </footer>
      </div>
    );
  }

  const handlePay = (e) => {
    e.preventDefault();
    setError('');
    if (method === 'card') {
      if (!cardNo.match(/^\d{16}$/)) {
        setError('Card number must be 16 digits'); return;
      }
      if (!expiry.match(/^(0[1-9]|1[0-2])\/(\d{2})$/)) {
        setError('Expiry must be MM/YY'); return;
      }
      if (!cvv.match(/^\d{3}$/)) {
        setError('CVV must be 3 digits'); return;
      }
    } else {
      if (!phone.match(/^03\d{9}$/)) {
        setError('Phone must be a valid Pakistani number (e.g. 03XXXXXXXXX)'); return;
      }
    }
    navigate('/booking-confirmation', { state: { booking, ref: 'FM' + Math.floor(100000 + Math.random() * 900000) } });
  };

  return (
    <div className="payment-container">
      <div className="logo">✈️ FlyMate</div>
      <button className="back-flights-btn" onClick={() => navigate('/search-flights')}>
        Back to Available Flights
      </button>
      <div className="payment-card">
        <h2>Complete Your Payment</h2>
        <div className="payment-summary">
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
        <form onSubmit={handlePay}>
          <div className="payment-methods">
            <label>
              <input type="radio" name="method" value="card" checked={method === 'card'} onChange={() => setMethod('card')} />
              Card
            </label>
            <label>
              <input type="radio" name="method" value="easypaisa" checked={method === 'easypaisa'} onChange={() => setMethod('easypaisa')} />
              Easypaisa
            </label>
            <label>
              <input type="radio" name="method" value="jazzcash" checked={method === 'jazzcash'} onChange={() => setMethod('jazzcash')} />
              JazzCash
            </label>
          </div>
          {method === 'card' ? (
            <>
              <div className="input-row">
                <label>Card Number</label>
                <input type="text" maxLength={16} value={cardNo} onChange={e => setCardNo(e.target.value.replace(/\D/g, ''))} placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="input-row">
                <label>Expiry (MM/YY)</label>
                <input type="text" maxLength={5} value={expiry} onChange={e => setExpiry(e.target.value)} placeholder="MM/YY" required />
              </div>
              <div className="input-row">
                <label>CVV</label>
                <input type="password" maxLength={3} value={cvv} onChange={e => setCvv(e.target.value.replace(/\D/g, ''))} placeholder="123" required />
              </div>
            </>
          ) : (
            <div className="input-row">
              <label>Phone Number</label>
              <input type="text" maxLength={11} value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, ''))} placeholder="03XXXXXXXXX" required />
            </div>
          )}
          {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
          <button type="submit" className="pay-btn">Pay Now</button>
        </form>
      </div>
      <footer className="footer">
        <p>© 2025 FlyMate. Powered by your dreams ✈️</p>
      </footer>
    </div>
  );
};

export default PaymentPage;