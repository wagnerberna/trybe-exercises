## MongoDB - Updates Simples e Complexos
![MongoDB](https://media.giphy.com/media/3otPoHMzdMgfZznjpe/giphy.gif)

---

### Update

```
db.nomeDaColecao.updateOne({ clausula }, { alteracao })
```

```
db.nomeDaColecao.updateMany({ clausula }, { alteracao })
```

---

### Operadores
`$set`

```
db.nomeDaColecao.updateOne(
    { clausula },
    { $set: {
       atributo: novoValor,
       atributo: { subatributo: novoValor }
       "atributo.subatributo": novoValor
    }}
)
```

---

### Operadores
`$mul`

```
db.nomeDaColecao.updateOne(
    { clausula },
    { $mul: {
      atributo: NumberInt(valorMultiplicador)
    }}
);
```

---

### Operadores
`$inc`

```
db.nomeDaColecao.updateOne(
    { clausula },
    { $inc: {
      atributo: qtdeIncrementoOuDecremento
    }}
);
```

---

### Operadores
`$min`

```
db.nomeDaColecao.updateOne(
    { clausula },
    { $min: {
      atributo: valorMinimoVerificado
    }}
);
```

---

### Operadores
`$max`

```
db.nomeDaColecao.updateOne(
    { clausula },
    { $max: {
      atributo: valorMaximoVerificado
    }}
);
```

---

### Operadores
`$currentDate`

```
db.nomeDaColecao.updateOne(
    { clausula },
    { $currentDate: {
      atributo: true
    }}
);
```

---

### Operadores
`$rename`

```
db.nomeDaColecao.updateOne(
    { clausula },
    { $rename: {
      atributo: novoNomeDoAtributo
    }}
);
```

---

### Operadores
`$unset`

```
db.nomeDaColecao.updateOne(
    { clausula },
    { $unset: {
      atributo: ""
    }}
);
```

---

# Dúvidas?
![DÚVIDAS](https://media.giphy.com/media/d1E1YlkOTe4IfdNC/giphy.gif)

---

### Por Hoje é só Pessoal!
![Thats All Folks!](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/795px-Thats_all_folks.svg.png)