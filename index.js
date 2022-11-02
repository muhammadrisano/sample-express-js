// jelaskan sedikit tentang modularisasi
// 1. core module
// 2. local module
// 3. third party module
require('dotenv').config()
const express = require('express')
// const bodyParser = require('body-parser')
const routers = require('./src/routers')

const app = express()
const PORT_APP = process.env.PORT_APP

// add middleware
app.use(express.json()) // bisa pake bodyParser

app.get('/', (req, res)=>{
    res.json({
        message: 'app running'
    })
})
app.use('/v1', routers)
app.listen(PORT_APP, ()=>{
    console.log(`server running in port ${PORT_APP}`);
})
