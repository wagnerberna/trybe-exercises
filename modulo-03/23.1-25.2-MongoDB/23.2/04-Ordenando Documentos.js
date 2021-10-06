db.filmes.find().sort({ "titulo": 1 });

db.filmes.find().sort({ "avaliacao.bom": -1 });

db.filmes.find().sort({ "ano": 1 }, { "titulo": -1 });

