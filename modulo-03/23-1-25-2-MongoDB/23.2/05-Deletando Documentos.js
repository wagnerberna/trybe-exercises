db.filmes.deleteOne({});

db.filmes.deleteOne({ titulo: "Os Oito Odiados" });

db.filmes.deleteMany({ "avaliacao.ruim": { $gt:6 }});
db.filmes.deleteMany({});