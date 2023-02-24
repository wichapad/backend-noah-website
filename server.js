const express = require('express');
const mysql =require('mysql');

const app = express();
app.use(express.json());

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'root',
    database : 'noahwebsite'
    
});




connection.connect ((err) => {
    if (err) {
        console.log('Error connecting to MySQL database = ', err)
        return;
    }
    console.log("MySQL successfully");
})

app.listen(3000, () => console.log('Server is running on port 3000'))