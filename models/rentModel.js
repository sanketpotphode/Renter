const db = require('../configs/config.database'); // Adjust the path accordingly

// Get all rents
const getAllRents = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM rent_details WHERE status = 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Get rent by ID
const getRentById = (rentId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM rent_details WHERE status = 1 AND id = ?', [rentId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

// Add a new rent
const addRent = (rentData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO rent_details SET ?', rentData, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Update rent details
const updateRent = (rentId, updatedRentData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE rent_details SET ? WHERE id = ?', [updatedRentData, rentId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Delete a rent (mark as inactive)
const deleteRent = (rentId) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE rent_details SET status = 0 WHERE id = ?', [rentId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllRents,
  getRentById,
  addRent,
  updateRent,
  deleteRent,
};
