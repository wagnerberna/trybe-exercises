db.voos.updateOne(
    { vooId: 757522 },
    {
        $inc: {
            decolagens: 2
        }
    }
);

db.voos.find(
    { vooId: 757522 },
    { decolagens: 1 }
).pretty();

db.voos.updateOne(
    { vooId: 757522 },
    {
        $inc: {
            decolagens: -2
        }
    }
);

db.voos.find(
    { vooId: 757522 },
    { decolagens: 1 }
).pretty();