const express = require('express');
const router = express.Router();
const noticePeriodController = require('../controllers/noticePeriodController');

// API to get all notice periods
router.get('/notice-periods', noticePeriodController.getAllNoticePeriods);

// API to get notice period details by notice period id
router.get('/notice-periods/:id', noticePeriodController.getNoticePeriodById);

// API for adding a new notice period
router.post('/notice-periods', noticePeriodController.addNoticePeriod);

// API for updating notice period details
router.put('/notice-periods/:id', noticePeriodController.updateNoticePeriod);

// API for deleting a notice period
router.delete('/notice-periods/:id', noticePeriodController.deleteNoticePeriod);

module.exports = router;
