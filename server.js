const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')

const app = express()

const port = 3001

mongoose.connect('mongodb://localhost/shopping-cart')

app.use(bodyParser.json())
app.use('/api/products', productRoutes)
app.use(bodyParser.urlencoded({ extended: true }))

const server = app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = server
