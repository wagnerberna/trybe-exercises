// Removendo o primeiro elemento
db.voos.updateOne(
    { vooId: 743218 },
    {
        $pop: { servicoDeBordo: -1 }
    }
);

// Removendo o último elemento
db.voos.updateOne(
    { vooId: 743218 },
    {
        $pop: { servicoDeBordo: 1 }
    }
);

db.voos.findOne(
    { vooId: 743218 },
    { servicoDeBordo: 1 }
);