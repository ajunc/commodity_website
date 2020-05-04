const mysql = require('mysql-pro')
const db = new mysql({
    mysql:{
        host: 'localhost',
        port: 3306,
        database: 'commodity_website',
        user: 'root',
        password: 'root'
    }
})

module.exports = db;