// make a node app with express and a route that takes in a name and returns a greeting

const express = require('express');
const PORT = process.env.PORT || 3000;
const Rahmin = 'Broke your code lol';
const joe = 'joe';
const Andrea = 'y no work';
const Rahmin2 =
  'this the second one idk if this gonna work or not but yolo amirite?';
const west = 'west';
const Ethan = 'I wish I was at ucchi';
const Stacy = 'Howdy Howdy';
const winnie = 'best dog in the world';
const blake = 'blake';
const jason = 'does this work?';
const Carlos = 'CsilvaD99';
const Carlos2 = 'asdf';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
