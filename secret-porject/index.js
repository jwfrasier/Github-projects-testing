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
const Ethan = "I wish I was at ucchi";
const Stacy = "Howdy Howdy";
const joe = "joe";
const Andrea = "y no work";
const west = "west";
const blake = "blake";
const Carlos = "CsilvaD99";
const Carlos2 = "asdf";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/olivia", (req, res) => {
  res.send("Winnie is the best dog ever!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
