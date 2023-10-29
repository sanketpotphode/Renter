const Property = require('../models/propertyModel'); // Import the Property model

// Controller function to get all properties
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.getAllProperties(); // Call the model function to retrieve all properties
    res.header("Access-Control-Allow-Origin", "*");
    res.send(properties);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving properties' });
  }
};

// Controller function to get a property by property id
const getPropertyById = async (req, res) => {
  try {
    const propertyId = req.params.id; // Extract the property id from the request parameters
    const property = await Property.getPropertyById(propertyId); // Call the model function to retrieve a property by id
    if (!property) {
      return res.status(404).send({ error: true, message: 'Property not found' });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(property);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving property details' });
  }
};

// Controller function to add a new property
const addProperty = async (req, res) => {
  try {
    const propertyData = req.body; // Extract property data from the request body
    const result = await Property.addProperty(propertyData); // Call the model function to add a new property
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New property added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding property' });
  }
};

// Controller function to update property details
const updateProperty = async (req, res) => {
  try {
    const propertyId = req.params.id; // Extract the property id from the request parameters
    const updatedPropertyData = req.body; // Extract updated property data from the request body
    const result = await Property.updateProperty(propertyId, updatedPropertyData); // Call the model function to update property details
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Property details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating property details' });
  }
};

// Controller function to mark a property as inactive (delete)
const deleteProperty = async (req, res) => {
  try {
    const propertyId = req.params.id; // Extract the property id from the request parameters
    const result = await Property.deleteProperty(propertyId); // Call the model function to mark a property as inactive
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Property deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting property' });
  }
};

// Export the controller functions
module.exports = {
  getAllProperties,
  getPropertyById,
  addProperty,
  updateProperty,
  deleteProperty,
};
