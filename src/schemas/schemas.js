const Joi = require('joi');

const schema = {
    lokasiSchema: Joi.object({
        lokasi: Joi.string().min(3).max(20).required(),
    }),
    eventSchema: Joi.object({
        name: Joi.string().min(5).max(20).required(),
        lokasi: Joi.string().required()
    }),
    purchaseSchema: Joi.object({
        tiket: Joi.string().required(),
        price: Joi.number().required(),
        qty: Joi.number().required()
    }),
    tiketSchema: Joi.object({
        id: Joi.string().required(),
        price: Joi.number().required(),
        stock: Joi.number().required()
    })
}

module.exports = schema;