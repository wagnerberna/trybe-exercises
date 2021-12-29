const express = require('express');
// const data = require('../data/customers.json');

//promises P/ q leia os arquivos e só retorna o valor após terminar de ler o arquivo
const fs = require('fs').promises;

const path = require('path');

//__dirname faz com q o caminho comece no diretório atual
const caminho = `${__dirname}/../data/customers.json`

const app = express();
app.use(express.json());

const { v4: uuidv4 } = require("uuid");

// app.get('/teste', (req, res) => {
//   res.status(200).json(data);
// });


// Teste LISTAR arquivos da pasta
app.get('/testefiles', async(req, res) => {
  const filesDir = await fs.readdir(path.resolve('./'))
    return res.status(200).send(filesDir);  
});

// Teste de LER o arquivo .json
app.get('/teste', async(req, res) => {
  const file = await fs.readFile(caminho, 'utf-8')
    // if(!file) {
    //   return res.status(401).json({error: 'Arquivo Não encontrado'});
    // }
  return res.status(200).send(file);
});

// Teste ESCREVER no arquivo .json
app.post('/teste', async(req, res) =>{
  const dadosReq = req.body;
  console.log(dadosReq);
  await fs.writeFile(caminho, JSON.stringify(dadosReq), 'utf-8');
  return res.status(201).send(dadosReq);

})


// array dos clientes
const customers = [];

// Middleware verifica conta e retorna conta solicitada
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;
  const customer = customers.find((el) => el.cpf === cpf);
  if(!customer) {
    return response.status(400).json({error: 'customer not found'});
  }
  request.customerReq = customer;
  return next();
}

// reduce para chegar ao saldo, conforme tipo da operação 
function getBalance(statement) {
  const balance = statement.reduce((acc, el) => {
    console.log(el);
    if (el.type === "credit") {
      console.log(`vai somar ${el.amount}`);
      console.log(acc);
      return acc + el.amount;
    } else {
      console.log(`vai subtrair ${el.amount}`);
      console.log(acc);
      return acc - el.amount;
    }
  }, 0);
  return balance;
}

// Post Cria conta
app.post('/account', (request, response) => {
  const { cpf, name } = request.body;
  const customerAlredyExists = customers.some((el) => el.cpf === cpf );
  if (customerAlredyExists) {
    return response.status(400).json({error: "Customer alredy exists!"})
  }
  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement:[]
  });
  return response.status(201).send();
});

// Get Pega extrato
app.get('/statement/', verifyIfExistsAccountCPF, (request, response) => {
  const { customerReq } = request;
  return response.json(customerReq.statement);
});

// Post envia depósito recebemos a descrição o o valor
app.post('/deposit', verifyIfExistsAccountCPF, (request, response)=> {
  const { description, amount } = request.body;
  const { customerReq } = request;
  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit"
  }
  customerReq.statement.push(statementOperation);
  return response.status(201).send();
});

// Post Realizar Saque
app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
  const { amount } = request.body;
  const { customerReq } = request;
  const balance = getBalance(customerReq.statement);
  if(balance < amount) {
    return response.status(400).json({error: "Insufficient funds!"});
  }
  const statementOperation = {
    amount,
    created_at: new Date(),
    type: "debit",
  };
  customerReq.statement.push(statementOperation);
  return response.status(201).send();
})

// Get gerar extrato por data
app.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
  const { customerReq } = request;
  const {date} = request.query;
  const dateFormat = new Date(date + " 00:00");
  const statement = customerReq.statement.filter((el) => {
    el.created_at.toDateString() === new Date(dateFormat).toDateString()
  });
  return response.json(customerReq.statement);
})

// Put Atualizar dados do Cliente somente o Nome
app.put("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { name } = request.body;
  const {customerReq} = request;

  customerReq.name = name;

  return response.status(201).send();
});

// Get Obter os dados da conta
app.get("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customerReq } = request;
  return response.json(customerReq);
});

// Delete Deletar conta
app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {
  const {customerReq} = request;
  console.log(`Cliente a ser deletado: ${customerReq.name}`);
  customers.splice(customerReq, 1);
  console.log(customers);
  return response.status(204);
});

// Get Pegar o Balance o saldo
app.get('/balance', verifyIfExistsAccountCPF, (request, response) => {
  const {customerReq} = request;
  const balance = getBalance(customerReq.statement);
  return response.json(balance);
})

// exportar o app q gera as rotas
module.exports = app;