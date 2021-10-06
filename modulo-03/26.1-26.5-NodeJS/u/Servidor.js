const express = require('express')
const fnExpress = express()

const porta = 3000;

fnExpress.get('/', (req, res) => {
  return res.send({menssage: 'Tudo ok com método get!'});
});

fnExpress.get('/', (req, res) => {
  return res.send({menssage: 'Tudo ok com método get!'});
});

fnExpress.listen(porta);

module.exports = servidor;


