const express = require('express')
const app = express()
const apiResources = require('./routes')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/v1',apiResources)
module.exports = app