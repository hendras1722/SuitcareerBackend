const express = require('express')
const Route = express.Router()

const {
    createData
} = require('../controllers/lokasi')

Route
    .post('/create', createData)

module.exports = Route