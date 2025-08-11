const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const User = require('../models/User');

// Create a booking
exports.createBooking = async (req, res) => {
  try {
    const { flightId, passengerName, seatPref, mealPref } = req.body;
    const userId = req.userId;
    
    // Check flight availability
    const flight = await Flight.findById(flightId);
    if (!flight || flight.seatsAvailable <= 0) {
      return res.status(400).json({ message: 'Flight not available' });
    }
    
    // Generate booking reference
    const bookingRef = 'FM' + Math.floor(100000 + Math.random() * 900000);
    
    // Create booking
    const booking = new Booking({
      user: userId,
      flight: flightId,
      passengerName,
      seatPref,
      mealPref,
      bookingRef
    });
    
    await booking.save();
    
    // Update flight seats
    flight.seatsAvailable -= 1;
    await flight.save();
    
    // Add booking to user
    await User.findByIdAndUpdate(userId, { $push: { bookings: booking._id } });
    
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get user bookings
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId })
      .populate('flight', 'airline flightNo departure arrival price date');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get booking by reference
exports.getBookingByRef = async (req, res) => {
  try {
    const booking = await Booking.findOne({ bookingRef: req.params.ref })
      .populate('flight')
      .populate('user', 'name email phone');
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};