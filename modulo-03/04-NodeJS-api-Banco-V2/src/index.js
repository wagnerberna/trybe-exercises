const express = require('express');
const bankRoutes = require('../routes/bankRoutes');

const app = express();
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send({ message: 'Teste index'})
});

app.use('/bank', bankRoutes);


//Callback informando a porta q está rodando
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
