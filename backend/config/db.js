const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Sara2000",
    database: "bonpay",
});

module.exports = pool;