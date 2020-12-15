const express = require('express')
const Route = express.Router()

const {
    createData,
    getData
} = require('../controllers/purchase')

Route
    .post('/purchase', createData)
    .get('/get_info', getData)

module.exports = Route