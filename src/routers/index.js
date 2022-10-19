const express = require('express')
const productsRouter = require('./products')
const routers = express.Router()
    // untuk endpoint user 
    // routers.use('/users')
    // untuk endpoint product
    routers.use('/products', productsRouter)

module.exports = routers