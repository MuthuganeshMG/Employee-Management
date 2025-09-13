const express = require('express');
const { addAttendance, getAttendance } = require('../controller/attendanceController');
const router = express.Router();

router.post('/present', addAttendance);
router.get('/list', getAttendance);

module.exports = router;