const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pageTitle: { type: String, required: true },
    imageUrl: { type: String, required: true },
    pageShortDescription: { type: String, required: true },
    pageLongDescription: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);