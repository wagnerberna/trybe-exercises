db.voos.updateMany(
    { vooId: 743217 },
    {
        $set: {
            "servicoDeBordo.$[elemento].quantidade": 1000
        }
    },
    {
        arrayFilters: [{ "elemento.categoria": "bebida" }]
    }
);


db.voos.findOne(
    { vooId: 743217 },
    {
      vooId: 1,
      servicoDeBordo: 1
    }
);


db.voos.updateOne(
    { vooId: 743218 },
    {
        $set: {
            "servicoDeBordo.$[elemento].quantidade": 300
        }
    },
    {
        arrayFilters: [
            {
                $or: [
                    { "elemento.item": "leite" },
                    { "elemento.item": "água" }
                ]
            }
        ]
    }
);

db.voos.findOne(
  { vooId: 743218 },
  {
    vooId: 1,
    servicoDeBordo: 1
  }
);