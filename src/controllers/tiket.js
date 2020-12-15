const { v4 } = require('uuid')
const style = require('../models/tiket')
const schema = require('../schemas/schemas')
const myHelp = require('../helpers/status')

module.exports = {
    createTiket: async (request, response) => {
        try {
            const result = schema.tiketSchema.validate(request.body);
            if (result.error) {
                myHelp.response(response, 400, result.error.details[0].message)
            } else {
                const {
                    id,
                    price,
                    stock
                } = request.body
                const data = {
                    id,
                    price,
                    stock
                }
                const resultData = await style.createTiket(data)
                myHelp.response(response, 200, resultData)
            }
        } catch (e) {
            myHelp.response(response, 400, "Gagal Create")
        }
    }
}