const express = require('express');
const patientcontroller = require('../controllers/patientcontroller') 
const router = express.Router();
router.get('/patientlist',patientcontroller.patientlist)
router.post('/prescription',patientcontroller.prescription)
router.get('/patientlist',patientcontroller.patientlist)
module.exports = router;