const mongoose = require('mongoose');
const Product = require('./product');

mongoose.connect('mongodb+srv://dolly:Z2djZ4s2IOwL3NGK@cluster0.v6obh.mongodb.net/products?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to Mongo DB');
    }).catch(() => {
        console.log('Connection Failed to Mongo DB.');
});

const createProduct = async (req, res, next) => {
    const createdPrdoct = new Product({
        pageTitle: req.body.pageTitle,
        imageUrl: req.body.imageUrl,
        pageShortDescription: req.body.pageShortDescription,
        pageLongDescription: req.body.pageLongDescription
    });
    const result = await createdPrdoct.save();
    res.json(result);
}

const getProduct = async (req, res, next) => {
    const products = await Product.find().exec();
    console.log('get data from mongo db : '+JSON.stringify(products));
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProduct = getProduct;