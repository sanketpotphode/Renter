const db = require('../configs/config.database'); // Adjust the path accordingly

// Function to get all deposits
const getAllDeposits = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM deposit_details WHERE status = 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to get deposit details by customer ID
const getDepositByCustomerId = (customerId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM deposit_details WHERE status = 1 AND customer_id = ?', [customerId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  };
};

// Function to add a new deposit
const addDeposit = (depositData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO deposit_details SET ?', depositData, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  };
};

// Function to update deposit details
const updateDeposit = (customerId, updatedDepositData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE deposit_details SET ? WHERE customer_id = ?', [updatedDepositData, customerId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  };
};

// Function to delete a deposit
const deleteDeposit = (customerId) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE deposit_details SET status = 0 WHERE customer_id = ?', [customerId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  };
};

module.exports = {
  getAllDeposits,
  getDepositByCustomerId,
  addDeposit,
  updateDeposit,
  deleteDeposit,
};
