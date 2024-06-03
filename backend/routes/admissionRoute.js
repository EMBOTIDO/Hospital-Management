const express = require('express');
const router = express.Router();
const admissionController = require('../controllers/admissionController');

router.post("/:patientID/create", admissionController.createAdmission);

module.exports = router;
