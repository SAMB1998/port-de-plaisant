const express = require('express');
const { createReservation, getReservations, getReservation, deleteReservation } = require('../controllers/reservationController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createReservation);
router.get('/', auth, getReservations);
router.get('/:idReservation', auth, getReservation);
router.delete('/:idReservation', auth, deleteReservation);

module.exports = router;
