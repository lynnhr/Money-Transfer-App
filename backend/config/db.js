const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "say-my-name",
    database: "bonpay",
});

module.exports = pool;