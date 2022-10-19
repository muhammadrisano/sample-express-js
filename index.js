// jelaskan sedikit tentang modularisasi
// 1. core module
// 2. local module
// 3. third party module
require('dotenv').config()
const express = require('express')
// const bodyParser = require('body-parser')
const routers = require('./src/routers')

const app = express()
const PORT = process.env.PORT

// add middleware
app.use(express.json()) // bisa pake bodyParser

app.get('/', (req, res)=>{
    res.json({
        message: 'app running'
    })
})
app.use('/v1', routers)
app.listen(PORT, ()=>{
    console.log(`server running in port ${PORT}`);
})
