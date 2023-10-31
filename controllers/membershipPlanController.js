const MembershipPlan = require('../models/membershipPlanModel');

const getAllMembershipPlans = async (req, res) => {
  try {
    const membershipPlans = await MembershipPlan.getAllMembershipPlans();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(membershipPlans);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving membership plans' });
  }
};

const getMembershipPlanById = async (req, res) => {
  try {
    const membershipTypeId = req.params.id;
    const membershipPlan = await MembershipPlan.getMembershipPlanById(membershipTypeId);
    if (!membershipPlan) {
      return res.status(404).send({ error: true, message: 'Membership plan not found' });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(membershipPlan);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving membership plan details' });
  }
};

const addMembershipPlan = async (req, res) => {
  try {
    const membershipPlanData = req.body;
    const result = await MembershipPlan.addMembershipPlan(membershipPlanData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New membership plan added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding membership plan' });
  }
};

const updateMembershipPlan = async (req, res) => {
  try {
    const membershipTypeId = req.params.id;
    const updatedMembershipPlanData = req.body;
    const result = await MembershipPlan.updateMembershipPlan(membershipTypeId, updatedMembershipPlanData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Membership plan details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating membership plan details' });
  }
};

const deleteMembershipPlan = async (req, res) => {
  try {
    const membershipTypeId = req.params.id;
    const result = await MembershipPlan.deleteMembershipPlan(membershipTypeId);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Membership plan deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting membership plan' });
  }
};

module.exports = {
  getAllMembershipPlans,
  getMembershipPlanById,
  addMembershipPlan,
  updateMembershipPlan,
  deleteMembershipPlan,
};
