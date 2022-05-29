const express = require('express')
const router = express.Router()

const { getProducts, createProduct, getProduct } = require('../controllers/products')

router
    .get('/:slug', getProduct)    
    .get('/', getProducts)
    .post('/', createProduct)

module.exports = router