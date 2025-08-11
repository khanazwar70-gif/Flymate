const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  flightNo: { type: String, required: true },
  departure: { 
    airport: { type: String, required: true },
    time: { type: String, required: true }
  },
  arrival: { 
    airport: { type: String, required: true },
    time: { type: String, required: true }
  },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  seatsAvailable: { type: Number, required: true },
  travelClass: { type: String, enum: ['Economy', 'Business'], default: 'Economy' },
  date: { type: Date, required: true },
  logo: { type: String }
});

module.exports = mongoose.model('Flight', flightSchema);