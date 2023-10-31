const Complaint = require('../models/complaintModel');

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.getAllComplaints();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(complaints);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving complaints' });
  }
};

const getComplaintByNumber = async (req, res) => {
  try {
    const complaintNumber = req.params.complaint_no;
    const complaint = await Complaint.getComplaintByNumber(complaintNumber);
    if (!complaint) {
      return res.status(404).send({ error: true, message: 'Complaint not found' });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(complaint);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving complaint details' });
  }
};

const addComplaint = async (req, res) => {
  try {
    const complaintData = req.body;
    const result = await Complaint.addComplaint(complaintData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New complaint added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding complaint' });
  }
};

const updateComplaint = async (req, res) => {
  try {
    const complaintNumber = req.params.complaint_no;
    const updatedComplaintData = req.body;
    const result = await Complaint.updateComplaint(complaintNumber, updatedComplaintData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Complaint details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating complaint details' });
  }
};

const deleteComplaint = async (req, res) => {
  try {
    const complaintNumber = req.params.complaint_no;
    const result = await Complaint.deleteComplaint(complaintNumber);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Complaint deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting complaint' });
  }
};

module.exports = {
  getAllComplaints,
  getComplaintByNumber,
  addComplaint,
  updateComplaint,
  deleteComplaint,
};
