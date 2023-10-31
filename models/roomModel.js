const db = require('../configs/config.database'); // Adjust the path accordingly

// Function to get all rooms
const getAllRooms = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM rooms_or_flats WHERE status = 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to get room details by room ID
const getRoomById = (roomId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM rooms_or_flats WHERE status = 1 AND id = ?', [roomId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

// Function to add a new room
const addRoom = (roomData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO rooms_or_flats SET ?', roomData, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to update room details
const updateRoom = (roomId, updatedRoomData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE rooms_or_flats SET ? WHERE id = ?', [updatedRoomData, roomId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Function to delete a room
const deleteRoom = (roomId) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE rooms_or_flats SET status = 0 WHERE id = ?', [roomId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllRooms,
  getRoomById,
  addRoom,
  updateRoom,
  deleteRoom,
};
