const connection = require('../configs/mysql')

module.exports = {
    createData: (data) => {
        return new Promise((resolve, reject) => {
            const totalPayment = data.price * data.qty
            connection.query('INSERT INTO transaksi SET ? ', data, (error, result) => {
                if (error) reject(new Error(error))
                connection.query(`INSERT INTO transaksidetail (id, name, price) VALUES ("${data.id}", "${data.tiket}", ${totalPayment})`, (error, result) => {
                    if (error) {
                        reject(new Error(error))
                    } else {
                        const sql = `SELECT * from tiket WHERE tiket.id LIKE "${data.tiket}"`
                        connection.query(`SELECT * from tiket WHERE tiket.id LIKE "${data.tiket}"`, (error, result) => {
                            if (error) {
                                reject(new Error(error))
                            } else {
                                const stock = result[0].stock - data.qty
                                connection.query(`UPDATE tiket SET stock = ${stock} WHERE tiket.id = ?`, data.tiket, (error, result) => {
                                    if (error) {
                                        reject(new Error(error))
                                    } else {
                                        resolve(result)
                                    }
                                })
                            }
                        })
                    }
                })
            })
        })
    },
    getData: (data) => {
        if (data) {
            return new Promise((resolve, reject) => {
                connection.query(`SELECT transaksidetail.*, event.name FROM transaksidetail INNER JOIN event ON transaksidetail.name = event.id WHERE event.name LIKE "%${data}%"`, (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
            })
        } else {
            return new Promise((resolve, reject) => {
                connection.query(`SELECT transaksidetail.*, event.name FROM transaksidetail INNER JOIN event ON transaksidetail.name = event.id`, (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result)
                })
            })
        }
    }
}