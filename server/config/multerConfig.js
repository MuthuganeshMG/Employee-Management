// const multer = require('multer');
// const path = require('path');
// // const uploads=require('../uploads')

// // Set up storage configuration for multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // const uploadPath = path.join(__dirname,  '../uploads'); 
//     // cb(null, uploadPath);
//     cb(null, path.join(__dirname, '../uploads'));
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname.replace(/\.[^/.]+/, '') + '_' + Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage }).single('img'); 

// module.exports = upload;


const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.replace(/\.[^/.]+/, '') + '_' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, JPG, and PNG are allowed.'));
    }
  }
}).single('img');

module.exports = upload;
