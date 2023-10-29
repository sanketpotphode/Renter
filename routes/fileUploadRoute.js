const express = require('express');
const router = express.Router();
const fileUploadMiddleware = require('../middleware/fileUploadMiddleware');

// Route for uploading a file
router.post('/upload', fileUploadMiddleware.upload.single('file'), (req, res) => {
  // Handle the uploaded file here
  res.json({ message: 'File uploaded successfully' });
});

module.exports = router;
