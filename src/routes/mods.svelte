<head>
    <!--<style>
        body {
            background-color: #21252b;
        }
        * {
            color: white;
        }
        nav {
            margin-left: 42.5%;
            margin-right: 50%;
            font-size: 15px;
        }
        .name {
            font-weight: bold;

        }
        .c {
            text-align: center;
            font-size: 15px;
        }
        .flex-container {
            display: flex;
        }

        .flex-container > div {

            margin: 5px;
            padding: 1px;
            font-size: 30px;
        }
        </style>
        -->
    <script>
        function mysql() {
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
            connection.connect(function (err) {
                if (err) {
                    return console.error('error: ' + err.message);
                }

                console.log('Connected to the MySQL server.');
            });
        }
        mysql();
    </script>
    <link rel="stylesheet" href="/style.css">
    <title>ModWeaver Mods</title>
</head>
<body>

<h1>Mods</h1>

</body>
