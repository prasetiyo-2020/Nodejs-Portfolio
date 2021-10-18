const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));

const connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'prasetiyo',
    password: 'yourpassword',
    database: 'prasetiyo_blog'
});

app.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM portfolios',
        (error, results) => {
            res.render('list.ejs', { portfolios: results });
        }
    );
});

app.listen(process.env.PORT || 3000);