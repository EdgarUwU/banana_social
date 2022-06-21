const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Alapastrucka1#_",
  database: "login",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE username = ? AND contrasena = ?",
    [username, password],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error");
      } else {
        if (results.length > 0) {
          res.send("Login Successful");
        } else {
          res.send("Login Failed");
        }
      }
    }
  );
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "INSERT INTO users (username, contrasena) VALUES (?, ?)",
    [username, password],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error");
      } else {
        res.send("User Registered");
      }
    }
  );
});
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error");
    } else {
      res.send(results);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
