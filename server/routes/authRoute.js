const express = require('express');
const { signup, login, logout } = require('../controller/authController');  // Fix the import names
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', login);
router.post('/logout',logout);

module.exports = router;