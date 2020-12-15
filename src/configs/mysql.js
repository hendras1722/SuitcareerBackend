const mysql = require('mysql')
const { database, port } = require('./index')

const connection = mysql.createConnection({
    host: database.host,
    user: database.user,
    password: database.password,
    database: database.database
})

connection.connect((error) => {
    if (error) console.log(error)
    console.log(`Database connected! port = ${port}`)
})

module.exports = connection
