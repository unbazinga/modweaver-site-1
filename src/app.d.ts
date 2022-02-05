/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
	interface Locals {}

	interface Platform {}

	interface Session {}

	interface Stuff {}
	let mysql = require('mysql');
	let sql_password = process.SQL_PASSWORD;
	let sql_user = process.SQL_USER;
	let sql_host = process.SQL_HOST;
	let connection = mysql.createConnection({
		host: sql_host,
		user: sql_user,
		password: sql_password,
		database: 'modweaver_staging'
	});
	connection.connect(function(err) {
		if (err) {
			return console.error('error: ' + err.message);
		}

		console.log('Connected to the MySQL server.');
	});
}
