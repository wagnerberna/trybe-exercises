use class;

db.magazine.insertOne({
    _id: 1,
    produto: "Filtro Polaroid",
    tags: ["eletronico", "camera"]
});

db.magazine.updateOne(
    { _id: 1 },
    { $addToSet: { tags: "acessorio" } }
);

db.magazine.updateOne(
    { _id: 1 },
    { $addToSet: { tags: "camera"  } }
);

db.magazine.updateOne(
    { _id: 1 },
    {
        $addToSet: {
            tags: {
                $each: ["camera", "acessorio", "camera", "fotografia"]
            }
        }
    }
);

db.magazine.findOne();

/* ********************************** */

db.voos.updateOne(
    { vooId: 743218 },
    {
        $addToSet: {
            servicoDeBordo: {
                $each: [
                    {
                        categoria: "bebida",
                        item: "água",
                        quantidade: 150
                    },
                    {
                        categoria: "comida",
                        item: "macarrão",
                        quantidade: 80
                    }
                ]
            }
        }
    }
);

db.voos.findOne(
    { vooId: 743218 },
    { servicoDeBordo: 1 }
);


db.voos.countDocuments(
    {
        "empresa.nome": "AMERICAN AIRLINES",
        "aeroportoOrigem.sigla": "KJFK",
        "aeroportoDestino.sigla": "SBGR"
    }
);

db.voos.updateMany(
    {
        "empresa.nome": "AMERICAN AIRLINES",
        "aeroportoOrigem.sigla": "KJFK",
        "aeroportoDestino.sigla": "SBGR"
    },
    {
        $addToSet: {
            servicoDeBordo : {
                $each: [
                    {
                        categoria: "bebida",
                        item: "coca-cola",
                        quantidade: 50
                    },
                    {
                        categoria: "bebida",
                        item: "leite",
                        quantidade: 100
                    },
                    {
                        categoria: "bebida",
                        item: "água",
                        quantidade: 150
                    },
                    {
                        categoria: "comida",
                        item: "carne",
                        quantidade: 180
                    },
                    {
                        categoria: "comida",
                        item: "frango",
                        quantidade: 60
                    },
                    {
                        categoria: "comida",
                        item: "macarrão",
                        quantidade: 80
                    }
                ]
            }
        }
    }
);


db.voos.find(
    {
        "empresa.nome": "AMERICAN AIRLINES",
        "aeroportoOrigem.sigla": "KJFK",
        "aeroportoDestino.sigla": "SBGR"
    },
    { servicoDeBordo: 1 }
);