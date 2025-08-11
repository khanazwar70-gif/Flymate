const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');
const auth = require('../middleware/auth');

router.get('/', flightController.getAllFlights);
router.get('/:id', flightController.getFlightById);
router.post('/', auth.authenticate, flightController.createFlight);
router.post('/seed', flightController.seedFlights); // For development only

module.exports = router;