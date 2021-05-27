const mysql = require('mysql');

var pool = mysql.createConnection({
    "user": process.env.MSQL_USER,
    "password": process.env.MSQL_PASSWORD,
    "database": process.env.MSQL_DATABASE,
    "host": process.env.MSQL_HOST,
    "port": process.env.MSQL_PORT
});

pool.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

pool.end((err) => {
    if (err) {
        console.log('Erro to finish connection...', err)
        return
    }
    console.log('The connection was finish...')
})

exports.pool = pool;