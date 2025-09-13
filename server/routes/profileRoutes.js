const express = require('express');
const { createProfile, editProfile, getProfile } = require('../controller/profileController');
const upload = require('../config/multerConfig');
const router = express.Router();

router.post('/pfcreate', upload, createProfile);
router.get('/pfget/:id',getProfile);
router.put('/pfedit/:id',upload,editProfile);

module.exports = router; 


