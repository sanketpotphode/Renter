const User = require('../models/userModel'); // Import the User model

// Controller function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers(); // Call the model function to retrieve all users
    res.header("Access-Control-Allow-Origin", "*");
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving users' });
  }
};

// Controller function to get a user by user id
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id; // Extract the user id from the request parameters
    const user = await User.getUserById(userId); // Call the model function to retrieve a user by id
    if (!user) {
      return res.status(404).send({ error: true, message: 'User not found' });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving user details' });
  }
};

// Controller function to add a new user
const addUser = async (req, res) => {
  try {
    const userData = req.body; // Extract user data from the request body
    const result = await User.addUser(userData); // Call the model function to add a new user
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New user added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding user' });
  }
};

// Controller function to update user details
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id; // Extract the user id from the request parameters
    const updatedUserData = req.body; // Extract updated user data from the request body
    const result = await User.updateUser(userId, updatedUserData); // Call the model function to update user details
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'User details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating user details' });
  }
};

// Controller function to mark a user as inactive (delete)
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id; // Extract the user id from the request parameters
    const result = await User.deleteUser(userId); // Call the model function to mark a user as inactive
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting user' });
  }
};

// Export the controller functions
module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
