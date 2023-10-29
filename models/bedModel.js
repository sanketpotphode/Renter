const db = require('../configs/config.database');

const getAllBeds = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM beds_details WHERE status = 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getBedById = (bedId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM beds_details WHERE status = 1 AND id = ?', [bedId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

const addBed = (bedData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO beds_details SET ?', bedData, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const updateBed = (bedId, updatedBedData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE beds_details SET ? WHERE id = ?', [updatedBedData, bedId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteBed = (bedId) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE beds_details SET status = 0 WHERE id = ?', [bedId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllBeds,
  getBedById,
  addBed,
  updateBed,
  deleteBed,
  // Add more functions for bed-related operations as needed
};
