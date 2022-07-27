// make a node app with express and a route that takes in a name and returns a greeting

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const blake = "blake";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/blake", (req, res) => {
  res.send("My name is Blake");
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
