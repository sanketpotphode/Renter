const NoticePeriod = require('../models/noticePeriodModel');

// Get all notice periods
const getAllNoticePeriods = async (req, res) => {
  try {
    const noticePeriods = await NoticePeriod.getAllNoticePeriods();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(noticePeriods);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving notice periods' });
  }
};

// Get notice period by ID
const getNoticePeriodById = async (req, res) => {
  try {
    const noticePeriodId = req.params.id;
    const noticePeriod = await NoticePeriod.getNoticePeriodById(noticePeriodId);
    if (!noticePeriod) {
      return res.status(404).send({ error: true, message: 'Notice period not found' });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(noticePeriod);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving notice period details' });
  }
};

// Add a new notice period
const addNoticePeriod = async (req, res) => {
  try {
    const noticePeriodData = req.body;
    const result = await NoticePeriod.addNoticePeriod(noticePeriodData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New notice period added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding notice period' });
  }
};

// Update notice period details
const updateNoticePeriod = async (req, res) => {
  try {
    const noticePeriodId = req.params.id;
    const updatedNoticePeriodData = req.body;
    const result = await NoticePeriod.updateNoticePeriod(noticePeriodId, updatedNoticePeriodData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Notice period details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating notice period details' });
  }
};

// Delete a notice period
const deleteNoticePeriod = async (req, res) => {
  try {
    const noticePeriodId = req.params.id;
    const result = await NoticePeriod.deleteNoticePeriod(noticePeriodId);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Notice period deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting notice period' });
  }
};

module.exports = {
  getAllNoticePeriods,
  getNoticePeriodById,
  addNoticePeriod,
  updateNoticePeriod,
  deleteNoticePeriod,
};
