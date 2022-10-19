const express = require('express')
const productsController = require('../controllers/products')
const routers = express.Router()
    routers.get('/', productsController.selectAll)

module.exports = routers