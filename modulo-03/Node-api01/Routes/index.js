const express = require('express');
const router = express.Router();

//Rota padrão
//retorna objeto com propriedade message
router.get('/', (req, res) => {
  return res.send({message: `método GET da Raiz!`})
})

router.post('/', (req, res) => {
  return res.send({message: `método POST da Raiz!`})
})

module.exports = router;