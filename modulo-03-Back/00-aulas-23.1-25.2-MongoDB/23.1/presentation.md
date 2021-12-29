## Introdução - NoSQL e MongoDB
![NoSQL e MongoDB](https://media.giphy.com/media/3otPoHMzdMgfZznjpe/giphy.gif)

---

### NoSQL (Not-Only SQL)
![NoSQL](https://media.giphy.com/media/l2JecEtSqEEyGZTry/source.gif)

---

### NoSQL

1. Escalabilidade
2. Performance
3. Esquema flexível (schemaless)
4. Mais entregas de funcionalidades 

---

### NoSQL: Escalabilidade

Os bancos de dados **NoSQL** nasceram com os conceitos de **Computação Distribuída** em seu *"DNA"*. Portanto, podem escalar muitos mais facilmente do que os bancos relacionais;

---

### NoSQL: Performance

Se conseguimos escalar mais fácil, chegamos a uma performance maior para volume e variedades dos dados;

---

### NoSQL: Esquema Flexível

Não ter um esquema ou estrutura de dados física é um ponto que favorece bastante os bancos de dados NoSQL. Assim, podemos alterar o esquema dos dados a qualquer momento somente nos preocupando com a aplicação que trabalha com eles, sem gerar `locks` ou grandes períodos de downtime durante essas atualizações.

---

### NoSQL: Mais Entregas

Tendo facilidade em escalar, maior performance e usando bem o conceito de *schemaless*, as aplicações ficam muito mais ágeis e com funcionalidades que atendem as expectativas em muito menos tempo.

---

### NoSQL: Tolerância à Falhas

Caso a instância falhe, o cluster direciona a requisição para outra instância.

---

### NoSQL: Balanceamento de Carga

O cluster direciona as novas requisições automaticamente para as instâncias que estão com um uso mínimo de carga, priorizando performance e uso mínimo dos recursos.

---

### Classes NoSQL

Chave/Valor (Key/Value)

![Key/Value](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-23/23-1/keyValue.jpeg?token=AA7NVW4ZGQ6NI4SUYLEGO6TAJ3EOM)

Exemplo: Redis

---

### Classes NoSQL

Família de Colunas (Column Family)

![Column Family](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-23/23-1/columnFamily.png?token=AA7NVW2CZN27NA5WHUMU6DDAJ3EWI)

Exemplo: Cassandra

---

### Classes NoSQL

Documentos (Document)

![Document](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-23/23-1/document.png?token=AA7NVW37MFMHSHAAEFBLSHLAJ3E4K)

Exemplo: CouchDB

---

### Classes NoSQL

Grafos (Graph)

![Graph](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-23/23-1/graph.png?token=AA7NVW3OB5YJSMSK3DOBYGLAJ3FB4)

Exemplo: Neo4j

---

### MongoDB

1. O nome vem da palavra inglesa Humongous que em uma tradução livre quer dizer Gigantesco.
2. Ele é escrito em C++.
3. É Open-source.
4. Tem foco em Alta Disponibilidade e Alta Escalabilidade.
5. É suportado pelas principais distribuições de Linux, Windows e também MacOS.
6. Ele trás também o melhor dos dois mundos (relacional e não relacional).

---

### MongoDB (Relacional)

* Uma Query Language flexível e poderosa
* Consistência forte (podemos ajustar isso de acordo com nossas necessidades)
* Índices secundários: podemos ter mais de um índice por coleção

---

### MongoDB (Não Relacional)

* A flexibilidade de arquitetura e schema design
* Escalabilidade
* Performance

---

### MongoDB (Terminologia)

![Terminologia](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-23/terminology.png?token=AA7NVW5UKL4XOADWUZKMSFDAJ3FPE)

---

### Comandos Básicos

```
show dbs
```
```
use nomeDoBanco
```
```
show collections
```

---

### Inserts

```
db.nomeDoBanco.insertOne({ obj })
```
```
db.nomeDoBanco.insertMany([{ obj1 }, { obj2 }, ..., { objN }])
```

---

### Find

```
db.nomeDoBanco.find({}) // ou
db.nomeDoBanco.find()
```
```
db.nomeDoBanco.findOne({}) // ou
db.nomeDoBanco.findOne()
```
```
db.nomeDoBanco.find({ cláusula }) // ou
db.nomeDoBanco.findOne({ cláusula })
```

---

### Find (apenas atributos requeridos)

```
db.nomeDoBanco.find({ cláusula }, { atributoRequerido: 1 })
// ou
db.nomeDoBanco.find({ cláusula }, { atributoNaoRequerido: 0 })
```

---

### Limit e Skip

```
db.nomeDoBanco.find().limit(2);
db.nomeDoBanco.find().limit(2).skip(2);
```

---

# Dúvidas?
![DÚVIDAS](https://media.giphy.com/media/d1E1YlkOTe4IfdNC/giphy.gif)

---

### Por Hoje é só Pessoal!
![Thats All Folks!](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/795px-Thats_all_folks.svg.png)