const connection = require('../configs/mysql')

module.exports = {
    createData: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO lokasi SET ? ', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    createEvent: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO event SET ? ', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    getEvent: (name) => {
        return new Promise((resolve, reject) => {
            if (name) {
                connection.query(`SELECT event.*, lokasi.lokasi FROM event INNER JOIN lokasi ON event.lokasi = lokasi.id WHERE event.name LIKE "%${name}%"`, (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
            } else {
                connection.query('SELECT event.*, lokasi.lokasi FROM event INNER JOIN lokasi ON event.lokasi = lokasi.id ', (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
            }
        })
    }
}