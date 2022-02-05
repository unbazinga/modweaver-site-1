let mysql = require('mysql');
// @ts-ignore
let sql_password = process.SQL_PASSWORD;
// @ts-ignore
let sql_user = process.SQL_USER;
// @ts-ignore
let sql_host = process.SQL_HOST;
export const db = mysql.createConnection({
    host: sql_host,
    user: sql_user,
    password: sql_password,
    database: 'modweaver_staging'
});