const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
// import statements
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// function calling
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'databasename',
});
// Insert user
app.post('/insert', (req, res) => {
  const { name, email } = req.body;
  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err, result) => {
    if (err) return res.send(err);
    res.send("User added");
  });
});
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
  
});