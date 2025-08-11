import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import SearchFlights from './pages/SearchFlights';
import FlightBooking from './pages/FlightBooking';
import PaymentPage from './pages/PaymentPage';
import BookingConfirmation from './pages/BookingConfirmation';


 // ✅ New import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ✅ New route */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search-flights" element={<SearchFlights />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />

      </Routes>
    </Router>
  );
}

export default App;
