const imageFilter = function(req, file, cb) {
    // Accept images only
    console.log('inside imageFilter');
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        console.log('inside imageFilter if condition');
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

exports.imageFilter = imageFilter;