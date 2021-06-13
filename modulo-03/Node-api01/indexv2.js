const express = require('express')
const servidor = express()

const porta = 3000;

//usando query no envio de info. (req) q é atribuida ao objetoRecebido.
//http://localhost:3000/?nome=Wagner&idade=40

servidor.get('/', (req, res) => {
  let objetoRecebido = req.query;

  return res.send({message: `Método GET Recebido usuário: ${objetoRecebido.nome}, Idade: ${objetoRecebido.idade}`});
});

servidor.post('/', (req, res) => {
  return res.send({message: 'Tudo ok com método post!'});
});

servidor.listen(porta);

module.exports = servidor;