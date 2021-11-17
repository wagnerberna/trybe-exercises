// SELECT * FROM inventory LIMIT 2;

db.inventory.find().limit(2);

// SELECT * FROM inventory WHERE status = "A" LIMIT 1;

db.inventory.find({ status: "A" }).limit(1);

// SELECT * FROM inventory WHERE status = "A" LIMIT 1 OFFSET 1;

db.inventory.find({ status: "A" }).limit(1).skip(1);

// Paginação

db.inventory.find({}, { item: 1 }); // retorna todos os cinco documentos
db.inventory.find({}, { item: 1 }).skip(0).limit(2); // retorna o primeiro e segundo documentos
db.inventory.find({}, { item: 1 }).skip(1*2).limit(2); // retorna o terceiro e quarto documentos
db.inventory.find({}, { item: 1 }).skip(2*2).limit(2); // retorna o último elemento
db.inventory.find({}, { item: 1 }).skip(3*2).limit(2); // retorna nada