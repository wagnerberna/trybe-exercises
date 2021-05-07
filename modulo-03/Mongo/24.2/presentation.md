## MongoDB - Updates Complexos - Arrays - Parte 1
![MongoDB](https://media.giphy.com/media/3otPoHMzdMgfZznjpe/giphy.gif)

---

### $push

```
db.nomeDaColecao.updateOne(
  { cláusula },
  {
    $push: { atributo: valor }
  }
);
```

---

### $push

```
db.nomeDaColecao.updateOne(
  { cláusula },
  {
    $push: { atributo: $each: [item1, item2, ... itemN] }
  }
);
```

---

### $pull

```
db.nomeDaColecao.updateMany(
  { cláusula },
  {
    $pull: {
      atributo: valorParaRemover
    }
  }
);
```

---

### $pop

```
db.nomeDaColecao.updateOne(
  { vooId: 743218 },
  {
    $pop: { atributo: -1 }
  }
);
```

---

### $pop

```
db.nomeDaColecao.updateOne(
  { clausula },
  {
    $pop: { atributo: 1 }
  }
);
```

---

### $addToSet

```
db.nomeDaColecao.updateOne(
  { clausula },
  { $addToSet: { atributo: valor } }
);
```

---

### arrayFilters

```
db.nomeDaColecao.updateOne(
  { cláusula },
  { $set :
    {
      "atributo.$[elemento].subAtributo": novoValor
    }
  },
  { arrayFilters: [ { "elemento.subAtributo": valorDoFiltro } ]}
)
```

---

# Dúvidas?
![DÚVIDAS](https://media.giphy.com/media/d1E1YlkOTe4IfdNC/giphy.gif)

---

### Por Hoje é só Pessoal!
![Thats All Folks!](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/795px-Thats_all_folks.svg.png)