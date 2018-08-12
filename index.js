'use strict';

const express = require('express');

let node_ssh = require('node-ssh')
let ssh = new node_ssh()

ssh.connect({
  host: '172.19.0.1',
  username: 'docker',
  privateKey: '/root/.ssh/id_rsa',
  password: 'tcuser'
})
.then(() => {
    console.log('conectado!!!!');
})

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