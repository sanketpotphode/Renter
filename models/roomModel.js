const Room = require('../models/roomModel');

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.getAllRooms();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(rooms);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving rooms' });
  }
};

const getRoomById = async (req, res) => {
  try {
    const roomId = req.params.id;
    const room = await Room.getRoomById(roomId);
    if (!room) {
      return res.status(404).send({ error: true, message: 'Room not found' });
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send(room);
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error retrieving room details' });
  }
};

const addRoom = async (req, res) => {
  try {
    const roomData = req.body;
    const result = await Room.addRoom(roomData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'New room added successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error adding room' });
  }
};

const updateRoom = async (req, res) => {
  try {
    const roomId = req.params.id;
    const updatedRoomData = req.body;
    const result = await Room.updateRoom(roomId, updatedRoomData);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Room details updated successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error updating room details' });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const roomId = req.params.id;
    const result = await Room.deleteRoom(roomId);
    res.header("Access-Control-Allow-Origin", "*");
    res.send({ error: false, data: result, message: 'Room deleted successfully.' });
  } catch (error) {
    res.status(500).send({ error: true, message: 'Error deleting room' });
  }
};

module.exports = {
  getAllRooms,
  getRoomById,
  addRoom,
  updateRoom,
  deleteRoom,
};
