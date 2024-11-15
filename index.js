require("dotenv").config();
const express = require("express");
const server = express();
server.use(express.json());
const PORT = process.env.PORT || 5000;

let users = [
  { id: 1, name: "Jeff" },
  { id: 2, name: "John" },
  { id: 3, name: "Jeb" },
];

server.get("/", (req, res) => {
  res.send(`<h2>Testing!</h2>`);
});

server.get("/api/users", (req, res) => {
  res.send(users);
});

server.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      message: "Please supply a 'username' and 'password'",
    });
  } else {
    try {
      res.status(200).json({username,password});
    } catch (err) {
      res.status(404).json({
        message: "Username Missing",
        err: err.message,
        stack: err.stack,
      });
    }
  }
});

server.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      message: "Please supply a 'username' and 'password'",
    });
  } else {
    try {
      res.status(200).json({
        message: `Welcome back, ${username}!`,
      });
    } catch (err) {
      res.status(404).json({
        message: "Username Missing",
        err: err.message,
        stack: err.stack,
      });
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
