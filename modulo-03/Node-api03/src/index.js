const express = require('express');
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

// array dos clientes
const customers = [];

// Middleware verifica conta e retorna conta solicitada
function verifyIfExistsAccountCPF(request, response, next) {
  //pega do request os dados enviados no Cabeçalho.
  const { cpf } = request.headers;
  
  //localiza o consumidor no array pelo CPF
  const customer = customers.find((el) => el.cpf === cpf);
  
  //SE customer vazio (false), retorna Resposta erro.
  if(!customer) {
    return response.status(400).json({error: 'customer not found'});
  }
  //SENÃO cair no if atribui o consumidor ao customerReq do request
  //Compartilha a inf. com quem usar o middleware
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
  //pega do request os dados enviados no Corpo.
  const { cpf, name } = request.body;
  
  //some verifica se existe o CPF do el no array, retorna true ou false.
  const customerAlredyExists = customers.some((el) => el.cpf === cpf );
  
  //se true, retorna, Respostas q já existe e encerra a FN.
  if (customerAlredyExists) {
    return response.status(400).json({error: "Customer alredy exists!"})
  }
  //se não cair no if add ao array de consumidores os dados.
  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement:[]
  });
  //retorna Resposta C/ status ok.
  return response.status(201).send();
});

// app.use(verifyIfExistsAccountCPF);

// Get Pega extrato
app.get('/statement/', verifyIfExistsAccountCPF, (request, response) => {
  //desestrutura do middleware
  const { customerReq } = request;
  //retorna Resposta C/ o extrato
  return response.json(customerReq.statement);
});

// Post envia depósito recebemos a descrição o o valor
app.post('/deposit', verifyIfExistsAccountCPF, (request, response)=> {
  //desestrutura e pega esses campos do body do request
  const { description, amount } = request.body;
  // desestrutura e pega customerReq do middleware
  const { customerReq } = request;
  //criar a operação
  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit"
  }
  // add ao array na posição correta pois o middleware já localizou
  customerReq.statement.push(statementOperation);
  // retorna Respostas do status ok de Criado 201
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
  //transforma toda hora em 00 assim faz a busca independente da hora.
  const dateFormat = new Date(date + " 00:00");
  // faz o filtro e transforma a data em string para conseguir fazer a comparação
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
//se for o último ítem do array dá errado.
app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {
  const {customerReq} = request;
  
  console.log(`Cliente a ser deletado: ${customerReq.name}`);
  
  customers.splice(customerReq, 1);

  console.log(customers);
  //para teste o json vai enviar o array com os q restaram.
  // Status padrão Delete: 204
  return response.status(200).json(customers);
});

// Get Pegar o Balance o saldo
app.get('/balance', verifyIfExistsAccountCPF, (request, response) => {
  const {customerReq} = request;

  const balance = getBalance(customerReq.statement);

  return response.json(balance);
})

app.listen(3333);
