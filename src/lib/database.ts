let mysql = require('mysql');
// @ts-ignore
let sql_password = process.SQL_PASSWORD;
// @ts-ignore
let sql_user = process.SQL_USER;
// @ts-ignore
let sql_host = "162.33.23.220";
export const db = mysql.createConnection({
    host: sql_host,
    user: sql_user,
    password: sql_password,
    database: 'modweaver_staging'
});