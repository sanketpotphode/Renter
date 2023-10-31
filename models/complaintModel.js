const db = require('../configs/config.database'); // Adjust the path accordingly

// Function to get all complaints
const getAllComplaints = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM complaint_details WHERE status = 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to get complaint details by complaint number
const getComplaintByNumber = (complaintNumber) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM complaint_details WHERE status = 1 AND complaint_no = ?', [complaintNumber], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

// Function to add a new complaint
const addComplaint = (complaintData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO complaint_details SET ?', complaintData, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to update complaint details
const updateComplaint = (complaintNumber, updatedComplaintData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE complaint_details SET ? WHERE complaint_no = ?', [updatedComplaintData, complaintNumber], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to delete a complaint
const deleteComplaint = (complaintNumber) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE complaint_details SET status = 0 WHERE complaint_no = ?', [complaintNumber], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllComplaints,
  getComplaintByNumber,
  addComplaint,
  updateComplaint,
  deleteComplaint,
};
