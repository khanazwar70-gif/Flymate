const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.post('/', auth.authenticate, bookingController.createBooking);
router.get('/my-bookings', auth.authenticate, bookingController.getUserBookings);
router.get('/:ref', bookingController.getBookingByRef);

module.exports = router;