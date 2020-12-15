const { v4 } = require('uuid')
const style = require('../models/purchase')
const schema = require('../schemas/schemas')
const myHelp = require('../helpers/status')

module.exports = {
    createData: async (request, response) => {
        try {
            const result = schema.purchaseSchema.validate(request.body);
            if (result.error) {
                myHelp.response(response, 400, result.error.details[0].message)
            } else {
                const {
                    tiket,
                    price,
                    qty
                } = request.body
                const data = {
                    id: v4(),
                    tiket,
                    price,
                    qty,
                    created_at: new Date(),
                    updated_at: new Date()
                }
                const resultData = await style.createData(data)
                myHelp.response(response, 200, resultData)
            }
        } catch (e) {
            myHelp.response(response, 400, "Gagal Create")
        }
    },
    getData: async (request, response) => {
        const name = request.query.name
        const result = await style.getData(name)
        myHelp.response(response, 200, result)
        try {
        } catch (e) {
            myHelp.response(response, 400, "Data Tidak Ditemukan")
        }
    }
}