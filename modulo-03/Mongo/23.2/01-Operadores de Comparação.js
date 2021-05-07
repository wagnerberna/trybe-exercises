// SELECT * FROM filmes WHERE ano < 2000;
db.filmes.find({ ano: { $lt: 2000 } });

// SELECT * FROM filmes WHERE ano <= 2000;
db.filmes.find({ ano: { $lte: 2000 } });

// SELECT * FROM filmes WHERE ano > 1993;
db.filmes.find({ ano: { $gt: 1993 } });

// SELECT * FROM filmes WHERE ano >= 1993;
db.filmes.find({ ano: { $gte: 1993 } });

// SELECT * FROM filmes WHERE ano BETWEEN 1993 AND 2000;
db.filmes.find(
    { ano: { $gte: 1993, $lte: 2000 } }
);

// Exatamente o mesmo resultado
db.filmes.find({ ano: { $eq: 1993 } });
db.filmes.find({ ano: 1993 });

// Exatamente o mesmo resultado
db.filmes.find({ "avaliacao.bom": { $eq: 7 } });
db.filmes.find({ "avaliacao.bom": 7 });

db.filmes.find({ "avaliacao.ruim": { $ne: 8 } });

db.filmes.find({ ano: { $in: [2001, 1968, 1995] } });

db.filmes.find({ ano: { $nin: [2013, 2008] } });