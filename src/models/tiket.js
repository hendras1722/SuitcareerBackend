const connection = require('../configs/mysql')

module.exports = {
    createTiket: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO tiket SET ? ', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}