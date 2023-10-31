const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');

// API to get all complaints
router.get('/complaints', complaintController.getAllComplaints);

// API to get complaint details by complaint number
router.get('/complaints/:complaint_no', complaintController.getComplaintByNumber);

// API for adding a new complaint
router.post('/complaints', complaintController.addComplaint);

// API for updating complaint details
router.put('/complaints/:complaint_no', complaintController.updateComplaint);

// API for deleting a complaint
router.delete('/complaints/:complaint_no', complaintController.deleteComplaint);

module.exports = router;

