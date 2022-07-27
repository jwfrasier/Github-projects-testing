// make a node app with express and a route that takes in a name and returns a greeting

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Ethan = "I wish I was at ucchi";
const Stacy = "Howdy Howdy";
const joe = "joe";
const Andrea = "y no work";
const winnie = "best dog in the world";
const west = "west";
const blake = "blake";
const jason = "does this work?";
const Carlos = "CsilvaD99";
const Carlos2 = "asdf";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/amanda", (req, res) => {
  res.send("Hello World!");
});

app.get("/blake", (req, res) => {
  res.send("It's Me!!!!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
