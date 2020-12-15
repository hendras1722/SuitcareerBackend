const express = require('express')
const Route = express.Router()

const {
    createEvent,
    getEvent
} = require('../controllers/lokasi')

Route
    .post('/create', createEvent)
    .get('/get_info', getEvent)

module.exports = Route