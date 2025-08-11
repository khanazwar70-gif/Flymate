import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const mockFlights = [
  {
    id: 1,
    airline: 'PIA',
    flightNo: 'PK301',
    logo: '/images/pia.png',
    departure: 'Islamabad (ISB)',
    arrival: 'Karachi (KHI)',
    time: '06:00 AM - 08:00 AM',
    duration: '2h 0m',
    price: 'PKR 25,000',
    travelClass: 'Economy',
    date: '2025-08-10',
  },
  {
    id: 2,
    airline: 'FlyJinnah',
    flightNo: 'FJ204',
    logo: '/images/flyjinnah.jpg',
    departure: 'Lahore (LHE)',
    arrival: 'Karachi (KHI)',
    time: '10:00 AM - 11:30 AM',
    duration: '1h 30m',
    price: 'PKR 18,000',
    travelClass: 'Business',
    date: '2025-08-11',
  },
  {
    id: 3,
    airline: 'Serene Air',
    flightNo: 'SA310',
    logo: '/images/serene.png',
    departure: 'Karachi (KHI)',
    arrival: 'Islamabad (ISB)',
    time: '02:00 PM - 03:30 PM',
    duration: '1h 30m',
    price: 'PKR 22,000',
    travelClass: 'Economy',
    date: '2025-08-12',
  },
  {
    id: 4,
    airline: 'AirSial',
    flightNo: 'AS450',
    logo: '/images/airsial.png',
    departure: 'Islamabad (ISB)',
    arrival: 'Riyadh (RUH)',
    time: '03:00 PM - 06:00 PM',
    duration: '3h 0m',
    price: 'PKR 59,000',
    travelClass: 'Business',
    date: '2025-08-13',
  },
  {
    id: 5,
    airline: 'Airblue',
    flightNo: 'AB330',
    logo: '/images/airblue.png',
    departure: 'Islamabad (ISB)',
    arrival: 'Jeddah (JED)',
    time: '11:00 AM - 02:30 PM',
    duration: '3h 30m',
    price: 'PKR 55,000',
    travelClass: 'Economy',
    date: '2025-08-13',
  },
  {
    id: 6,
    airline: 'Serene Air',
    flightNo: 'SA110',
    logo: '/images/serene.png',
    departure: 'Karachi (KHI)',
    arrival: 'Lahore (LHE)',
    time: '07:30 AM - 09:00 AM',
    duration: '1h 30m',
    price: 'PKR 20,000',
    travelClass: 'Economy',
    date: '2025-08-14',
  },
  {
    id: 7,
    airline: 'PIA',
    flightNo: 'PK711',
    logo: '/images/pia.png',
    departure: 'Lahore (LHE)',
    arrival: 'Dubai (DXB)',
    time: '09:00 AM - 11:30 AM',
    duration: '2h 30m',
    price: 'PKR 45,000',
    travelClass: 'Business',
    date: '2025-08-14',
  },
  {
    id: 8,
    airline: 'Airblue',
    flightNo: 'AB202',
    logo: '/images/airblue.png',
    departure: 'Lahore (LHE)',
    arrival: 'Abu Dhabi (AUH)',
    time: '01:00 AM - 03:30 AM',
    duration: '2h 30m',
    price: 'PKR 48,000',
    travelClass: 'Economy',
    date: '2025-08-15',
  },
  {
    id: 9,
    airline: 'Serene Air',
    flightNo: 'SA909',
    logo: '/images/serene.png',
    departure: 'Karachi (KHI)',
    arrival: 'Peshawar (PEW)',
    time: '08:00 PM - 09:30 PM',
    duration: '1h 30m',
    price: 'PKR 15,000',
    travelClass: 'Economy',
    date: '2025-08-16',
  },
  {
    id: 10,
    airline: 'PIA',
    flightNo: 'PK785',
    logo: '/images/pia.png',
    departure: 'Islamabad (ISB)',
    arrival: 'London (LHR)',
    time: '05:00 AM - 10:00 AM',
    duration: '7h 0m',
    price: 'PKR 95,000',
    travelClass: 'Business',
    date: '2025-08-16',
  },
  {
    id: 11,
    airline: 'FlyJinnah',
    flightNo: 'FJ102',
    logo: '/images/flyjinnah.jpg',
    departure: 'Lahore (LHE)',
    arrival: 'Dubai (DXB)',
    time: '07:30 PM - 10:00 PM',
    duration: '2h 30m',
    price: 'PKR 52,000',
    travelClass: 'Economy',
    date: '2025-08-17',
  },
  {
    id: 12,
    airline: 'Serene Air',
    flightNo: 'SA707',
    logo: '/images/serene.png',
    departure: 'Karachi (KHI)',
    arrival: 'Quetta (UET)',
    time: '12:00 PM - 01:30 PM',
    duration: '1h 30m',
    price: 'PKR 18,000',
    travelClass: 'Business',
    date: '2025-08-18',
  },
];

const SearchFlights = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleBookNow = (flight) => {
    navigate('/flight-booking', { state: { flight } });
  };

  return (
    <div className="search-flights" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <div className="logo" style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: 'white' }}>
        ✈️ FlyMate
      </div>

      <div className="results-container">
        <header className="results-header">
          <h1>Search Results: Available Flights</h1>
          <button onClick={handleBack}>Back to Dashboard</button>
        </header>

        <div className="flights-list">
          {mockFlights.map((flight) => (
            <div key={flight.id} className="flight-card">
              <img src={flight.logo} alt={flight.airline} className="airline-logo" />
              <div className="flight-details">
                <h3>{flight.airline}</h3>
                <p><strong>Flight No:</strong> {flight.flightNo}</p>
                <p>{flight.departure} ➝ {flight.arrival}</p>
                <p>{flight.time}</p>
                <p>Duration: {flight.duration}</p>
                <p>Date: {flight.date}</p>
                <p>Class: {flight.travelClass}</p>
                <p className="price">{flight.price}</p>
                <button onClick={() => handleBookNow(flight)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

        <footer className="results-footer">
          <p>© 2025 FlyMate. Powered by your dreams ✈️</p>
        </footer>
      </div>
    </div>
  );
};

export default SearchFlights;