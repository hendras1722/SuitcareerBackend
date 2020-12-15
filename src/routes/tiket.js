const express = require('express')
const Route = express.Router()

const {
    createTiket
} = require('../controllers/tiket')

Route
    .post('/ticket/create', createTiket)

module.exports = Route