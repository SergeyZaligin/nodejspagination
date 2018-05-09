const router = require('express').Router();
const faker = require('faker');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/add-product', (req, res, next) => {
    res.render('products/add-product');
});

module.exports = router;