const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
  passengerName: { type: String, required: true },
  seatPref: { type: String, enum: ['window', 'aisle', 'middle'], default: 'window' },
  mealPref: { type: String, enum: ['veg', 'non-veg', 'no-meal'], default: 'no-meal' },
  bookingDate: { type: Date, default: Date.now },
  bookingRef: { type: String, required: true, unique: true },
  status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' }
});

module.exports = mongoose.model('Booking', bookingSchema);