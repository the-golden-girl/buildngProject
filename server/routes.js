const express = require('express');
const multer = require('multer');
const helpers = require('./helpers');
const mongoDB = require('./mongoose');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, fle, cb) {
        cb(null, 'uploads/');
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

router.get('/', (req, res, next) => {
    console.log('GET request places');
    res.json("first get call");
});

router.post('/api/addData', mongoDB.createProduct);

router.get('/api/getData', mongoDB.getProduct);

router.post('/api/uploadImage', (req, res, next) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('file');

    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any
        console.log('req from upload : '+JSON.stringify(req.file));

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        res.json(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
    });
});


module.exports = router;