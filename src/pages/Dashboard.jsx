import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Azwar Rafiq',
    email: 'azwar@example.com',
    phone: '+92-300-1234567'
  });

  const airlineData = {
    name: 'Pakistan International Airlines',
    logo: './images/pia.png',
    logoType: 'image', 
    flightNumber: 'PK304',
    route: 'Islamabad → Dubai',
    date: '12 August 2025',
    time: '7:00 PM',
    class: 'Economy'
  };
  const handleLogout = () => {
    navigate('/');
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    // In a real app, you would save to backend here
    console.log('Profile updated:', profileData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancelEdit = () => {
    // Reset to original data
    setProfileData({
      name: 'Azwar Rafiq',
      email: 'azwar@example.com',
      phone: '+92-300-1234567'
    });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="dashboard" style={{ backgroundImage: 'url(./images/background.jpg)' }}>
      <div className="dashboard-content">
        {/* FlyMate Logo */}
        <div className="logo" style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '20px',
          color: 'white'
        }}>
          ✈️ FlyMate
          </div>

        <header className="dashboard-header">
          <h1>Welcome to FlyMate, Azwar!</h1>
          <button onClick={handleLogout}>Logout</button>
        </header>

        <section className="quick-search">
          <h2>Book Your Next Flight</h2>
          <form className="search-form" onSubmit={(e) => {
            e.preventDefault();
            navigate('/search-flights');
          }}>
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
            <input type="date" />
            <select>
              <option>Economy</option>
              <option>Business</option>
            </select>
            <button type="submit">Search Flights</button>
          </form>
        </section>

        <section className="bookings">
          <h2>Upcoming Trips</h2>
          <div className="booking-card">
            <div className="airline-info">
              <div className="airline-logo">
                {airlineData.logoType === 'image' ? (
                  <img 
                    src={airlineData.logo} 
                    alt={`${airlineData.name} logo`}
                    className="airline-logo-img"
                  />
                ) : (
                  airlineData.logo
                )}
              </div>
              <div className="airline-details">
                <h3>{airlineData.name}</h3>
                <p className="flight-number">Flight: {airlineData.flightNumber}</p>
              </div>
            </div>
            <div className="flight-details">
              <p><strong>Route:</strong> {airlineData.route}</p>
              <p><strong>Date:</strong> {airlineData.date}</p>
              <p><strong>Time:</strong> {airlineData.time}</p>
              <p><strong>Class:</strong> {airlineData.class}</p>
            </div>
            <div className="booking-actions">
              <button className="cancel-btn">Cancel</button>
              <button className="download-btn">Download Ticket</button>
            </div>
          </div>
        </section>

        <section className="profile-info">
          <h2>Your Profile</h2>
          {!isEditing ? (
            <>
              <p><strong>Name:</strong> {profileData.name}</p>
              <p><strong>Email:</strong> {profileData.email}</p>
              <p><strong>Phone:</strong> {profileData.phone}</p>
              <button onClick={handleEditProfile}>Edit Profile</button>
            </>
          ) : (
            <div className="profile-edit-form">
              <div className="form-group">
                <label><strong>Name:</strong></label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label><strong>Email:</strong></label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label><strong>Phone:</strong></label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="profile-actions">
                <button onClick={handleSaveProfile} className="save-btn">Save Changes</button>
                <button onClick={handleCancelEdit} className="cancel-btn">Cancel</button>
          </div>
        </div>
          )}
        </section>

        <footer className="dashboard-footer">
          <p>© 2025 FlyMate. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
