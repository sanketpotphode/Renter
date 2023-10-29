const Bed = require('../models/bedModel');

const getAllBeds = async (req, res) => {
  try {
    const beds = await Bed.getAllBeds();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(beds);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving beds' });
  }
};

const getBedById = async (req, res) => {
  try {
    const bedId = req.params.id;
    const bed = await Bed.getBedById(bedId);
    if (!bed) {
      return res.status(404).send({ error: true, message: 'Bed not found' });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(bed);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving bed details' });
  }
};

const addBed = async (req, res) => {
  try {
    const bedData = req.body;
    const result = await Bed.addBed(bedData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New bed added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding bed' });
  }
};

const updateBed = async (req, res) => {
  try {
    const bedId = req.params.id;
    const updatedBedData = req.body;
    const result = await Bed.updateBed(bedId, updatedBedData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Bed details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating bed details' });
  }
};

const deleteBed = async (req, res) => {
  try {
    const bedId = req.params.id;
    const result = await Bed.deleteBed(bedId);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Bed deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting bed' });
  }
};

module.exports = {
  getAllBeds,
  getBedById,
  addBed,
  updateBed,
  deleteBed,
  // Add more controller functions here
};
