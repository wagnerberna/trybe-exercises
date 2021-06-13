const express = require('express');
const router = express.Router();

//Rotas raiz de usuários
//retorna objeto com propriedade message
router.get('/', (req, res) => {
  return res.send({message: `método GET da Rota Usuários!`})
})

router.post('/', (req, res) => {
  return res.send({message: `método POST da Rota Usuários!`})
})

//Rota de criação de usuários (POST)
router.post('/create', (req, res) => {
  return res.send({message: 'Seu usuário foi criado =)'})
})

module.exports = router;

