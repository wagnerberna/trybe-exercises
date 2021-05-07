db.filmes.find({
    $and: [
        { ano: { $gt:2000 } },
        { "avaliacao.bom": { $gte: 8 } }
    ]
});

db.filmes.find({
    $or: [
        { ano: { $gt:2000 } },
        { "avaliacao.bom": { $gte: 8 } }
    ]
});

db.filmes.find({
    ano: {
        $not: { $lt: 2000 }
    }
});

// Resultados sem o diretor `Michael Bay`, nem `avaliacao.ruim` igual a 10.
db.filmes.find({
    $nor:[
        { "diretor": "Michael Bay" },
        { "avaliacao.ruim": 10 }
    ]
});