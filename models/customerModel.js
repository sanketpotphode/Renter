const db = require('../configs/config.database'); // Adjust the path accordingly

const getAllCustomers = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM customer_deatils WHERE status = 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getCustomerById = (customerId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM customer_deatils WHERE status = 1 AND customer_id = ?', [customerId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

const addCustomer = (customerData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO customer_deatils SET ?', customerData, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const updateCustomer = (customerId, updatedCustomerData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE customer_deatils SET ? WHERE customer_id = ?', [updatedCustomerData, customerId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteCustomer = (customerId) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE customer_deatils SET status = 0 WHERE customer_id = ?', [customerId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
