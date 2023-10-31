const db = require('../configs/config.database'); // Adjust the path accordingly

// Function to get all notice periods
const getAllNoticePeriods = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM notice_period_details WHERE status = 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to get notice period by ID
const getNoticePeriodById = (noticePeriodId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM notice_period_details WHERE status = 1 AND id = ?', [noticePeriodId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

// Function to add a new notice period
const addNoticePeriod = (noticePeriodData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO notice_period_details SET ?', noticePeriodData, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to update notice period details
const updateNoticePeriod = (noticePeriodId, updatedNoticePeriodData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE notice_period_details SET ? WHERE id = ?', [updatedNoticePeriodData, noticePeriodId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to delete a notice period
const deleteNoticePeriod = (noticePeriodId) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE notice_period_details SET status = 0 WHERE id = ?', [noticePeriodId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllNoticePeriods,
  getNoticePeriodById,
  addNoticePeriod,
  updateNoticePeriod,
  deleteNoticePeriod,
};
