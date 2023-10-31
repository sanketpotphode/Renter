const Rent = require('../models/rentModel');

const getAllRents = async (req, res) => {
  try {
    const rents = await Rent.getAllRents();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(rents);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving rents' });
  }
};

const getRentById = async (req, res) => {
  try {
    const rentId = req.params.id;
    const rent = await Rent.getRentById(rentId);
    if (!rent) {
      return res.status(404).send({ error: true, message: 'Rent not found' });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(rent);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving rent details' });
  }
};

const addRent = async (req, res) => {
  try {
    const rentData = req.body;
    const result = await Rent.addRent(rentData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New rent added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding rent' });
  }
};

const updateRent = async (req, res) => {
  try {
    const rentId = req.params.id;
    const updatedRentData = req.body;
    const result = await Rent.updateRent(rentId, updatedRentData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Rent details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating rent details' });
  }
};

const deleteRent = async (req, res) => {
  try {
    const rentId = req.params.id;
    const result = await Rent.deleteRent(rentId);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Rent deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting rent' });
  }
};

module.exports = {
  getAllRents,
  getRentById,
  addRent,
  updateRent,
  deleteRent,
};
