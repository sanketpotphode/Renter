const multer = require('multer');

// Set up the storage engine for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the destination directory where files will be saved
    cb(null, 'uploads/'); // Adjust the directory path as needed
  },
  filename: (req, file, cb) => {
    // Define the file name for the uploaded file
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
  },
});

// Create an instance of multer for file uploads
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Set the maximum file size (in this example, 10 MB)
  },
  fileFilter: (req, file, cb) => {
    // Define a function to filter allowed file types
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf']; // Adjust the allowed file types
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); // Allow the file
    } else {
      cb(new Error('Invalid file type.'), false); // Reject the file
    }
  },
});

module.exports = {
  upload,
};
