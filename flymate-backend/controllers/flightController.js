const Flight = require('../models/Flight');

// Get all flights
exports.getAllFlights = async (req, res) => {
  try {
    const { departure, arrival, date } = req.query;
    let query = {};
    
    if (departure) query['departure.airport'] = departure;
    if (arrival) query['arrival.airport'] = arrival;
    if (date) query.date = new Date(date);
    
    const flights = await Flight.find(query);
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get flight by ID
exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    res.json(flight);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create a flight (admin only)
exports.createFlight = async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Seed mock flights (for development)
exports.seedFlights = async (req, res) => {
  try {
    const mockFlights = [
      // Add your mock flight data here (similar to your frontend mock data)
      {
        airline: 'PIA',
        flightNo: 'PK301',
        departure: { airport: 'Islamabad (ISB)', time: '06:00 AM' },
        arrival: { airport: 'Karachi (KHI)', time: '08:00 AM' },
        duration: '2h 0m',
        price: 25000,
        seatsAvailable: 120,
        travelClass: 'Economy',
        date: new Date('2025-08-10'),
        logo: '/images/pia.png'
      },
      // Add more flights...
    ];
    
    await Flight.deleteMany({});
    const flights = await Flight.insertMany(mockFlights);
    res.json({ message: `${flights.length} flights seeded` });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};