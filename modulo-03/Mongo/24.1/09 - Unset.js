db.voos.updateOne(
    { vooId: 757522 },
    {
        $unset: {
            "ultimaModificacao.motivo": ""
        }
    }
);
  
db.voos.findOne(
    { vooId: 757522 },
    {
        ultimaModificacao: 1
    }
);

db.voos.updateOne(
    { vooId: 757522 },
    {
        $unset: {
            "ultimaModificacao": ""
        }
    }
);
  
db.voos.findOne(
    { vooId: 757522 },
    { ultimaModificacao: 1 }
);