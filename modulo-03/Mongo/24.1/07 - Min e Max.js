db.voos.updateOne(
    { vooId: 757522 },
    {
        $min: { "passageiros.pagos": 76000 }
    }
);
  
db.voos.findOne(
    { vooId: 757522 },
    {
        passageiros: 1
    }
);

db.voos.updateOne(
    { vooId: 757522 },
    {
        $min: { "passageiros.pagos": 75000 }
    }
);
  
db.voos.findOne(
    { vooId: 757522 },
    {
        passageiros: 1
    }
);

db.voos.updateOne(
    { vooId: 757522 },
    {
        $max: { "passageiros.gratis": 2000 }
    }
);
  
db.voos.findOne(
    { vooId: 757522 },
    {
        passageiros: 1
    }
);



db.voos.updateOne(
    { vooId: 757522 },
    {
        $max: { "passageiros.gratis": 3000 }
    }
);
  
db.voos.findOne(
    { vooId: 757522 },
    {
        passageiros: 1
    }
);


