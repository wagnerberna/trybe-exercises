use class;

db.students.insertOne({
    _id: 1,
    name: "Alex"
});
  
db.students.updateOne(
    { _id: 1 },
    {
        $push: { scores: 89 }
    }
);

db.students.updateOne(
    { _id: 1 },
    {
        $push: { scores: 88 }
    }
);

db.students.updateOne(
    { _id: 1 },
    {
        $push: {
            scores: { $each: [90, 92, 85] }
        }
    }
);
  
db.students.find({ _id: 1 }).pretty();

/* ********************************************* */

use dataFlights;

db.voos.findOne(
  {
    "empresa.nome": "AMERICAN AIRLINES",
    "aeroportoOrigem.sigla": "KJFK",
    "aeroportoDestino.sigla": "SBGR"
  },
  {
    vooId: 1,
    "empresa.nome": 1,
    "aeroportoOrigem": 1,
    "aeroportoDestino": 1
  }
);

db.voos.updateOne(
    { vooId: 743218 },
    {
        $push: {
            servicoDeBordo: {
                categoria: "bebida",
                item: "coca-cola",
                quantidade: 50
            }
        }
    }
);

db.voos.updateOne(
    { vooId: 743218 },
    {
        $push: {
            servicoDeBordo:
            {
                $each: [
                    { categoria: "bebida", item: "guaraná", quantidade: 40 },
                    { categoria: "bebida", item: "vinho", quantidade: 35 },
                    { categoria: "bebida", item: "água", quantidade: 150 },
                    { categoria: "bebida", item: "leite", quantidade: 100 },
                    { categoria: "bebida", item: "café", quantidade: 200 },
                    { categoria: "comida", item: "macarrão", quantidade: 80 },
                    { categoria: "comida", item: "frango", quantidade: 60 }
                ]
            }
        }
    }
);
  
db.voos.findOne(
    { vooId: 743218 },
    { "servicoDeBordo": 1 }
);