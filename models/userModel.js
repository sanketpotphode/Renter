const db = require('../configs/config.database'); // Import the database configuration

// Model function to get all users
const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM user_details WHERE status = 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Model function to get a user by user id
const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM user_details WHERE status = 1 AND id = ?', [userId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

// Model function to add a new user
const addUser = (userData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO user_details SET ?', userData, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Model function to update user details
const updateUser = (userId, updatedUserData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE user_details SET ? WHERE id = ?', [updatedUserData, userId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Model function to mark a user as inactive (delete)
const deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE user_details SET status = 0 WHERE id = ?', [userId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Export the model functions
module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
