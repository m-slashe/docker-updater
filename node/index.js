'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\nSome change!!!\nMoreChange!!!');
});

app.get('/exit', (req, res) => {
  res.send('Aplicativo restartado!!!!');
  process.exit(0);
});

app.get('/info', (req, res) => {
  res.send({name: 'node'});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);