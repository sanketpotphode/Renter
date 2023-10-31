const db = require('../configs/config.database'); // Adjust the path accordingly

// Function to get all membership plans
const getAllMembershipPlans = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM membership_plan_types WHERE status = 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to get membership plan by membership type ID
const getMembershipPlanById = (membershipTypeId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM membership_plan_types WHERE status = 1 AND membrship_type_id = ?', [membershipTypeId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  };
};

// Function to add a new membership plan
const addMembershipPlan = (membershipPlanData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO membership_plan_types SET ?', membershipPlanData, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  };
};

// Function to update membership plan details
const updateMembershipPlan = (membershipTypeId, updatedMembershipPlanData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE membership_plan_types SET ? WHERE membrship_type_id = ?', [updatedMembershipPlanData, membershipTypeId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  };
};

// Function to delete a membership plan
const deleteMembershipPlan = (membershipTypeId) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE membership_plan_types SET status = 0 WHERE membrship_type_id = ?', [membershipTypeId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  };
};

module.exports = {
  getAllMembershipPlans,
  getMembershipPlanById,
  addMembershipPlan,
  updateMembershipPlan,
  deleteMembershipPlan,
};
