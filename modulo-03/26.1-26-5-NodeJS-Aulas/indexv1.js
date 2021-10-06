const express = require('express')
const servidor = express()

const porta = 3000;

//endpoint no diretório raiz

servidor.get('/', (req, res) => {
  return res.send({message: 'Tudo ok com método get!'});
});

servidor.post('/', (req, res) => {
  return res.send({message: 'Tudo ok com método post!'});
});

servidor.listen(porta);

module.exports = servidor;