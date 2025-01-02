const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const captainController = require('../controllers/captain.controller');

const authCaptainMiddleware = require('../middlewares/auth.middleware');

// captain Register route
router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({ min : 3}).withMessage('First name must be at least 3 characters'),
    body('password').isLength({ min : 6 }).withMessage('Password must be at least 6 characters'),
    body('vehicle.color').isLength({ min : 3 }).withMessage('Color must be at least 3 characters'),
    body('vehicle.plate').isLength({ min : 3 }).withMessage('Plate must be at least 3 characters'),
    body('vehicle.capacity').isInt({ min : 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
], captainController.registerCaptain);

// captain Login route
router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters')
], captainController.loginCaptain);

router.get('/profile', authCaptainMiddleware.authCaptain, captainController.getCaptainProfile);


router.get('/logout', authCaptainMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;