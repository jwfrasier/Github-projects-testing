// make a node app with express and a route that takes in a name and returns a greeting

const express = require("express");
const PORT = process.env.PORT || 3000;
const amanda = "this is interesting";
const Ethan = "I wish I was at ucchi";
const Stacy = "Howdy Howdy";
const winnie = "best dog in the world";
const jason = "does this work?";
const joe = "joe";
const Andrea = "y no work";
const west = "west";
const blake = "blake";
const Carlos = "CsilvaD99";
const Carlos2 = "asdf";
const violet = "hmmm";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/west", (req, res) => {
  res.send("west");
});

app.get("/stacy", (req, res) => {
  res.send("It's Me!!!!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
