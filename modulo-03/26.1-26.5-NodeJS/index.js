const express = require('express')
const servidor = express()

//instanciando rotas:
const indexRoutes = require('./Routes/index');
const usersRoutes = require('./Routes/users');

//associar rotas ao servidor
//na Raiz do diretório chama o indexRoutes
servidor.use('/', indexRoutes);
servidor.use('/users', usersRoutes)

const porta = 3000;


//usando query no envio de info. (req) q é atribuida ao objetoRecebido.
//http://localhost:3000/?nome=Wagner&idade=40


servidor.listen(porta);

module.exports = servidor;