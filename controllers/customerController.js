const Customer = require('../models/customerModel');
// ...other model imports

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.getAllCustomers();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(customers);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving customers' });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.getCustomerById(customerId);
    if (!customer) {
      return res.status(404).send({ error: true, message: 'Customer not found' });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(customer);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving customer details' });
  }
};

const addCustomer = async (req, res) => {
  try {
    const customerData = req.body;
    const result = await Customer.addCustomer(customerData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New customer added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding customer' });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.customer_id;
    const updatedCustomerData = req.body;
    const result = await Customer.updateCustomer(customerId, updatedCustomerData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Customer details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating customer details' });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customerId = req.body.customer_id;
    const result = await Customer.deleteCustomer(customerId);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Customer deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting customer' });
  }
};

// ...other controller functions

module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  // ...other controller functions
};
