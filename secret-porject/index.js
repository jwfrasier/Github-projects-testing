// make a node app with express and a route that takes in a name and returns a greeting

const express = require('express');
const PORT = process.env.PORT || 3000;
const Rahmin = 'Broke your code lol';
const joe = 'joe';
const Andrea = 'y no work';
const Rahmin2 =
  'this the second one idk if this gonna work or not but yolo amirite?';
const west = 'west';

const blake = "blake";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
