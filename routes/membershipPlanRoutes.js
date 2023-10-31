const express = require('express');
const router = express.Router();
const membershipPlanController = require('../controllers/membershipPlanController');

// API to get all membership plans
router.get('/membership-plans', membershipPlanController.getAllMembershipPlans);

// API to get membership plan details by membership type ID
router.get('/membership-plans/:id', membershipPlanController.getMembershipPlanById);

// API for adding a new membership plan
router.post('/membership-plans', membershipPlanController.addMembershipPlan);

// API for updating membership plan details
router.put('/membership-plans/:id', membershipPlanController.updateMembershipPlan);

// API for deleting a membership plan
router.delete('/membership-plans/:id', membershipPlanController.deleteMembershipPlan);

module.exports = router;
