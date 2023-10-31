const Deposit = require('../models/depositModel');

const getAllDeposits = async (req, res) => {
  try {
    const deposits = await Deposit.getAllDeposits();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(deposits);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving deposits' });
  }
};

const getDepositByCustomerId = async (req, res) => {
  try {
    const customerId = req.params.customer_id;
    const deposit = await Deposit.getDepositByCustomerId(customerId);
    if (!deposit) {
      return res.status(404).send({ error: true, message: 'Deposit not found for the customer' });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(deposit);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving deposit details' });
  }
};

const addDeposit = async (req, res) => {
  try {
    const depositData = req.body;
    const result = await Deposit.addDeposit(depositData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New deposit added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding deposit' });
  }
};

const updateDeposit = async (req, res) => {
  try {
    const customerId = req.params.customer_id;
    const updatedDepositData = req.body;
    const result = await Deposit.updateDeposit(customerId, updatedDepositData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Deposit details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating deposit details' });
  }
};

const deleteDeposit = async (req, res) => {
  try {
    const customerId = req.params.customer_id;
    const result = await Deposit.deleteDeposit(customerId);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Deposit deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting deposit' });
  }
};

module.exports = {
  getAllDeposits,
  getDepositByCustomerId,
  addDeposit,
  updateDeposit,
  deleteDeposit,
};
