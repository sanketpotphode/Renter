const db = require('../configs/config.database'); // Import the database configuration

// Model function to get all properties
const getAllProperties = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM property_details WHERE status = 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Model function to get a property by property id
const getPropertyById = (propertyId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM property_details WHERE status = 1 AND id = ?', [propertyId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

// Model function to add a new property
const addProperty = (propertyData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO property_details SET ?', propertyData, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Model function to update property details
const updateProperty = (propertyId, updatedPropertyData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE property_details SET ? WHERE id = ?', [updatedPropertyData, propertyId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Model function to mark a property as inactive (delete)
const deleteProperty = (propertyId) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE property_details SET status = 0 WHERE id = ?', [propertyId], (error, results) => {
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
  getAllProperties,
  getPropertyById,
  addProperty,
  updateProperty,
  deleteProperty,
};
