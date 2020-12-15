const express = require('express')
const Route = express.Router()

const tiket = require('./event')
const event = require('./tiket')
const lokasi = require('./lokasi')
const purchase = require('./purchase')
Route
    .use('/event', tiket, event)
    .use('/location', lokasi)
    .use('/transaction', purchase)

module.exports = Route