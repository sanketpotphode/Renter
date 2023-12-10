const jwtService = require('../utils/jwtService');
const User = require('../models/userModel'); // Import the User model

// Controller function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving users' });
  }
};

// Controller function to get a user by user id
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.getUserById(userId);
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
    const userData = req.body;
    const result = await User.addUser(userData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New user added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding user' });
  }
};

// Controller function to update user details
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const result = await User.updateUser(userId, updatedUserData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'User details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating user details' });
  }
};

// Controller function to mark a user as inactive (delete)
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await User.deleteUser(userId);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting user' });
  }
};

// Controller function to authenticate and generate JWT
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.getUserByUsername(username);

    if (!user || !User.comparePasswords(password, user.password)) {
      return res.status(401).json({ error: true, message: 'Invalid username or password' });
    }

    const token = jwtService.generateToken({ user_id: user.id, user_type: user.user_type });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Error during login' });
  }
};

// Controller function to register a new user
const registerUser = async (req, res) => {
  try {
    const userData = req.body; // Extract user data from the request body

    // Implement your user registration logic here
    const newUser = await User.registerUser(userData);

    // Generate a JWT
    const token = jwtService.generateToken({ user_id: newUser.id, user_type: newUser.user_type });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Error during registration' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
  registerUser, 
};
