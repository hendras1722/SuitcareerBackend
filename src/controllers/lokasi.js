const { v4 } = require('uuid')
const style = require('../models/lokasi')
const myHelp = require('../helpers/status')
const schema = require('../schemas/schemas')

module.exports = {
    createData: async (request, response) => {
        try {
            const result = schema.lokasiSchema.validate(request.body);
            if (result.error) {
                myHelp.response(response, 400, result.error.details[0].message)
            } else {
                const {
                    lokasi
                } = request.body
                const data = {
                    id: v4(),
                    lokasi
                }
                const resultData = await style.createData(data)
                myHelp.response(response, 200, resultData)
            }
        } catch (e) {
            myHelp.response(response, 400, "Gagal Create")
        }
    },
    createEvent: async (request, response) => {
        try {
            const result = schema.eventSchema.validate(request.body)
            if (result.error) {
                myHelp.response(response, 400, result.error.details[0].message)
            } else {
                const {
                    name,
                    lokasi
                } = request.body
                const data = {
                    id: v4(),
                    name,
                    lokasi,
                    created_at: new Date(),
                    updated_at: new Date()
                }
                const resultData = await style.createEvent(data)
                myHelp.response(response, 200, resultData)
            }
        } catch (e) {
            myHelp.response(response, 400, "Gagal Create")
        }
    },
    getEvent: async (request, response) => {
        try {
            const name = request.query.name
            const result = await style.getEvent(name)
            myHelp.response(response, 200, result)
        } catch (e) {
            myHelp.response(response, 400, "Data Tidak Ditemukan")
        }
    }
}